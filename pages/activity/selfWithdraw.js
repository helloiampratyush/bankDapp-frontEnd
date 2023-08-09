import { useQuery } from "@apollo/client"
import self_Withdraw from "../../constants/graph04"
import { useMoralis } from "react-moralis"
import WFBox from "../../components/selfWix"
export default function selfDeposite() {
    const { loading, error, data: self } = useQuery(self_Withdraw)
    const { isWeb3Enabled } = useMoralis()
    return (
        <div className="container mx-auto m-4 ">
            <h1 className="text-2xl text-purple-900 bg-neutral-300 text-center">
                {" "}
                SELF-WITHDRAW-LOGGING
            </h1>
            {isWeb3Enabled ? (
                loading || !self ? (
                    <div>loading.....</div>
                ) : (
                    self.selfWithdraws.map((d1) => {
                        const { id, beneficiaries, amount } = d1
                        return (
                            <WFBox
                                beneficiaries={beneficiaries}
                                amount={amount}
                                key={`${id}${amount}`}
                            />
                        )
                    })
                )
            ) : (
                <div>web3 is not Enabled</div>
            )}
        </div>
    )
}
