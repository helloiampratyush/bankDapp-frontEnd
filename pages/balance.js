import { useMoralis } from "react-moralis"
import { useWeb3Contract } from "react-moralis"
import networkMapping from "../constants/networkAddress.json"
import bankAbi from "../constants/bankDpp.json"
import { useState } from "react"
import { useEffect } from "react"
import { Button, Input, useNotification, Information } from "web3uikit"
import { ethers } from "ethers"
export default function Home() {
    const { chainId, isWeb3Enabled, account } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "11155111"
    const bankAddress = networkMapping[chainString].bankDpp[0]
    const { runContractFunction } = useWeb3Contract()
    const [balance, setBalance] = useState(0)
    async function setupUI() {
        const returnBalance = await runContractFunction({
            params: {
                abi: bankAbi,
                contractAddress: bankAddress,
                functionName: "yourTotalAmountInBank",
                params: {},
            },
            onError: (error) => console.log(error),
        })

        if (returnBalance) {
            setBalance(returnBalance.toString())
        }
    }
    useEffect(() => {
        setupUI()
    }, [balance, account, isWeb3Enabled, chainId])

    return (
        <div className=" text-fuchsia-900 my-6 mx-6 text-center text-2xl">
            {isWeb3Enabled ? (
                <Information
                    information={ethers.utils.formatUnits(balance, "ether")}
                    topic="Your Amount Stored In This Bank in ETH"
                />
            ) : (
                <div>web3 currently not enabled</div>
            )}
        </div>
    )
}
