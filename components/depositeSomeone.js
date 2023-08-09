import { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
export default function DFBox({ depositor, depositee, amount }) {
    const [Depositor, setDepositor] = useState(0)
    const [Amount, setAmount] = useState(0)
    const [Depositee, setDepositee] = useState(0)
    const { isWeb3Enabled } = useMoralis()

    async function updateUi() {
        const Depositor = depositor
        const Depositee = depositee
        const Amount = amount
        setDepositor(Depositor)
        setDepositee(Depositee)
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
                    {Depositor} has deposited {Amount / 1e18} ETH in {Depositee} Account
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}
