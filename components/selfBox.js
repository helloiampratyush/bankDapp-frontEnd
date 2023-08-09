import { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
export default function SFBox({ depositor, amount }) {
    const [Depositor, setDepositor] = useState(0)
    const [Amount, setAmount] = useState(0)
    const { isWeb3Enabled } = useMoralis()

    async function updateUi() {
        const Depositor = depositor
        const Amount = amount
        setDepositor(Depositor)
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
                    {Depositor} has deposited {Amount / 1e18} ETH in His Account
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}
