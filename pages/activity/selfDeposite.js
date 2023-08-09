import { useQuery } from "@apollo/client"
import self_deposite from "../../constants/graph02"
import { useMoralis } from "react-moralis"
import SFBox from "../../components/selfBox"
export default function selfDeposite() {
    const { loading, error, data: self } = useQuery(self_deposite)
    const { isWeb3Enabled } = useMoralis()
    return (
        <div className="container mx-auto m-4 ">
            <h1 className="text-2xl text-purple-900 bg-neutral-300 text-center">
                {" "}
                SELF-DEPOSITE-LOGGING
            </h1>
            {isWeb3Enabled ? (
                loading || !self ? (
                    <div>loading.....</div>
                ) : (
                    self.selfDeposits.map((d1) => {
                        const { depositor, amount } = d1
                        return (
                            <SFBox
                                depositor={depositor}
                                amount={amount}
                                key={`${depositor}${amount}`}
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
