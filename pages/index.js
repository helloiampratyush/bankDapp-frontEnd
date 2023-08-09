import { useMoralis } from "react-moralis"
import { useWeb3Contract } from "react-moralis"
import networkMapping from "../constants/networkAddress.json"
import bankAbi from "../constants/bankDpp.json"
import { useState } from "react"
import { Button, Input, useNotification, Form } from "web3uikit"
import { ethers } from "ethers"
export default function Home() {
    const { chainId, isWeb3Enabled } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "11155111"
    const bankAddress = networkMapping[chainString].bankDpp[0]
    const [valueETH, setValueETH] = useState(0)
    const { runContractFunction } = useWeb3Contract()
    const dispatch = useNotification()
    let EthValue1

    if (valueETH) EthValue1 = ethers.utils.parseEther(`${valueETH}`)

    const { runContractFunction: getWithDraw } = useWeb3Contract({
        abi: bankAbi,
        contractAddress: bankAddress,
        functionName: "deposite",
        msgValue: EthValue1,
        params: {},
    })

    async function handleOthersDeposite(data) {
        console.log("depositing wait ")
        const _to = data.data[0].inputResult

        const ethAmount = ethers.utils.parseUnits(data.data[1].inputResult, "ether").toString()

        const deposite = {
            abi: bankAbi,
            contractAddress: bankAddress,
            msgValue: ethAmount,
            functionName: "depositedByOtherPeople",
            params: {
                _to: _to,
            },
        }
        await runContractFunction({
            params: deposite,
            onSuccess: handleDepositeSuccess,
            onError: (error) => console.log(error),
        })
    }

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
            message: " Eth deposited",
            title: "deposite ",
            position: "topR",
        })
        window.location.reload(false)
    }

    return (
        <div className="container mx-auto flex flex-col">
            <h1 className="py-4 px-4 font-bold text-blue-500 text-2xl">Deposite Section</h1>

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
                            <Button onClick={handleClick} text="selfDeposite" />
                        </div>
                    </div>
                    <h1 className=" m-4 text-2xl text-lime-700">Deposite others</h1>

                    <Form
                        onSubmit={handleOthersDeposite}
                        data={[
                            {
                                name: "Address",
                                type: "text",
                                inputWidth: "30%",
                                value: "",
                                key: "depositee",
                            },

                            {
                                name: "Price(In ETH)",
                                type: "number",
                                value: "",
                                key: "price",
                            },
                        ]}
                        title="deposite others"
                        id="Main Form"
                    />
                </div>
            ) : (
                <div>Web3 Currently Not Enabled</div>
            )}
        </div>
    )
}
