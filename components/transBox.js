import { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
export default function TFBox({ to, from, amount }) {
    const [To, setTo] = useState(0)
    const [Amount, setAmount] = useState(0)
    const [From, setFrom] = useState(0)
    const { isWeb3Enabled } = useMoralis()

    async function updateUi() {
        const To = to
        const From = from
        const Amount = amount
        setTo(To)
        setFrom(From)
        setAmount(Amount)
    }
    useEffect(() => {
        if (isWeb3Enabled) {
            updateUi()
        }
    }, [isWeb3Enabled])
    return (
        <div className="container mx-auto flex flex-col bg-slate-50 m-2">
            {isWeb3Enabled ? (
                <div className="text-blue-500 m-4">
                    {From} has transferred {Amount / 1e18} ETH in {To} Metamask Account
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}
