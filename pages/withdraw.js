import { useMoralis } from "react-moralis"
import { useWeb3Contract } from "react-moralis"
import networkMapping from "../constants/networkAddress.json"
import bankAbi from "../constants/bankDpp.json"
import { useState } from "react"
import { Button, Input, useNotification, Card, Form } from "web3uikit"
import { ethers } from "ethers"
export default function Home() {
    const { chainId, isWeb3Enabled } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "11155111"
    const bankAddress = networkMapping[chainString].bankDpp[0]
    const [valueETH, setValueETH] = useState(0)
    const dispatch = useNotification()
    const { runContractFunction } = useWeb3Contract()
    let ethValue2
    if (valueETH) ethValue2 = ethers.utils.parseEther(`${valueETH}`)

    const { runContractFunction: getWithDraw } = useWeb3Contract({
        abi: bankAbi,
        contractAddress: bankAddress,
        functionName: "withdraw",

        params: {
            ethAmount: ethValue2,
        },
    })

    const handleClick = () => {
        getWithDraw({
            onError: (error) => console.log(error),
            onSuccess: handleDepositeSuccess,
        })
    }
    async function handleDepositeSuccess(tx) {
        await tx.wait(1)
        dispatch({
            type: "success",
            message: " Eth withdrawn",
            title: "",
            position: "topR",
        })
        window.location.reload(false)
    }
    async function handleTransferSuccess(tx) {
        await tx.wait()
        dispatch({
            type: "success",
            message: "Eth Transferred",
            title: "",
            position: "topR",
        })
        window.location.reload(false)
    }
    async function handleTransfer(data) {
        console.log("doing....")
        const _to = data.data[0].inputResult
        const ethValue = ethers.utils.parseEther(`${data.data[1].inputResult}`)
        const transfer = {
            abi: bankAbi,
            contractAddress: bankAddress,
            functionName: "Transfer",
            params: {
                _to: _to,
                ethAmount: ethValue,
            },
        }
        await runContractFunction({
            params: transfer,
            onSuccess: handleTransferSuccess,
            onError: (error) => console.log(error),
        })
    }

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-blue-500 text-2xl">Withdraw Section</h1>

            {isWeb3Enabled && chainId ? (
                <div>
                    <div className="flex flex-row m-2">
                        <Input
                            label="ETH"
                            labelBgColor=""
                            name="DEPOSITE INPUT"
                            type="number"
                            onChange={(event) => {
                                setValueETH(event.target.value)
                            }}
                        />
                        <div className="mx-4 my-1">
                            <Button onClick={handleClick} text="Withdraw" />
                        </div>
                    </div>
                    <h1 className="m-4 text-fuchsia-900 text-2xl">Transfer to others wallet</h1>
                    <Form
                        onSubmit={handleTransfer}
                        data={[
                            {
                                name: "Address",
                                type: "text",
                                inputWidth: "30%",
                                value: "",
                                key: "transfrer",
                            },

                            {
                                name: "Price(In ETH)",
                                type: "number",
                                value: "",
                                key: "price",
                            },
                        ]}
                        title="Transfer directly  into others wallet"
                        id="Main Form"
                    />
                </div>
            ) : (
                <div>Web3 Currently Not Enabled</div>
            )}
        </div>
    )
}
