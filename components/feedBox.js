import { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
export default function FBox({ provider, feedback }) {
    const [Provider, setProvider] = useState(0)
    const [FeedBack, setFeedBack] = useState(0)
    const { isWeb3Enabled } = useMoralis()
    const truncateStr = (fullStr, strLen) => {
        if (fullStr.length <= strLen) return fullStr

        const separator = "..."
        const seperatorLength = separator.length
        const charsToShow = strLen - seperatorLength
        const frontChars = Math.ceil(charsToShow / 2)
        const backChars = Math.floor(charsToShow / 2)
        return (
            fullStr.substring(0, frontChars) +
            separator +
            fullStr.substring(fullStr.length - backChars)
        )
    }
    async function updateUi() {
        const Provider = provider
        const FeedBack = feedback
        setProvider(Provider)
        setFeedBack(FeedBack)
    }
    useEffect(() => {
        if (isWeb3Enabled) {
            updateUi()
        }
    }, [isWeb3Enabled])
    return (
        <div className="m-2 text-xl bg-zinc-100 text-blue-500">
            <div className="mx-4">
                {truncateStr(Provider || "", 15)} has told :{FeedBack}
            </div>
        </div>
    )
}
