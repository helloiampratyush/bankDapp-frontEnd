import { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
export default function WFBox({ beneficiaries, amount }) {
    const [Beneficiaries, setBeneficiaries] = useState(0)
    const [Amount, setAmount] = useState(0)
    const { isWeb3Enabled } = useMoralis()

    async function updateUi() {
        const Beneficiaries = beneficiaries
        const Amount = amount
        setBeneficiaries(Beneficiaries)
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
                    {Beneficiaries} has withdrawn {Amount / 1e18} ETH in His Metamask Account
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}
