import { useMoralis } from "react-moralis"
import { useWeb3Contract } from "react-moralis"
import networkMapping from "../constants/networkAddress.json"
import bankAbi from "../constants/bankDpp.json"
import { useState } from "react"
import { Button, Input, useNotification, Information, Card, Form } from "web3uikit"
import { ethers } from "ethers"
import feed_back from "../constants/graph01"
import Others_depositers from "../constants/graph01"
import { useQuery } from "@apollo/client"
import { useEffect } from "react"
import FBox from "../components/feedBox"
export default function Home() {
    const [FeedBack, setFeedBack] = useState(0)
    const { chainId } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "11155111"
    const bankAddress = networkMapping[chainString].bankDpp[0]
    const { isWeb3Enabled } = useMoralis()
    const dispatch = useNotification()
    const { runContractFunction: getFeedBack } = useWeb3Contract({
        abi: bankAbi,
        contractAddress: bankAddress,
        functionName: "ProvideFeedBack",
        params: {
            feedBack: FeedBack,
        },
    })
    const handleFeedBack = () => {
        getFeedBack({
            onError: (error) => console.log(error),
            onSuccess: handleFeedBackSuccess,
        })
        console.log("hi")
    }
    async function handleFeedBackSuccess(tx) {
        await tx.wait(1)

        dispatch({
            type: "success",
            message: "feedback done",
            title: "",
            position: "topR",
        })
    }

    const { loading, error, data: observefeedBack } = useQuery(feed_back)
    return (
        <div className="container mx-auto">
            {isWeb3Enabled ? (
                <div>
                    <h1 className="text-2xl text-red-700 mt-4"> FeedBack Section</h1>
                    <div className="flex flex-row m-6">
                        <Input
                            label="Label text"
                            name="Test text Input"
                            type="text"
                            onChange={(event) => {
                                setFeedBack(event.target.value)
                            }}
                            width="400px"
                        />

                        <div className="mx-4 mt-1">
                            <Button onClick={handleFeedBack} text="feedback" />
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
            <h1 className="text-2xl text-blue-900 mt-10">feedBack provided</h1>
            <div className="flex flex-col">
                {isWeb3Enabled && chainId ? (
                    loading || !observefeedBack ? (
                        <div>Loading...</div>
                    ) : (
                        observefeedBack.feedBackTimes.map((data1) => {
                            const { provider, feedback } = data1

                            return (
                                <FBox
                                    provider={provider}
                                    feedback={feedback}
                                    key={`${provider}${feedback}`}
                                />
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
