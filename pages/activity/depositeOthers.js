import { useQuery } from "@apollo/client"
import deposite_Others from "../../constants/graph03"
import { useMoralis } from "react-moralis"
import DFBox from "../../components/depositeSomeone"
export default function selfDeposite() {
    const { loading, error, data: self } = useQuery(deposite_Others)
    const { isWeb3Enabled } = useMoralis()
    return (
        <div className="container mx-auto m-4 ">
            <h1 className="text-2xl text-purple-900 bg-neutral-300 text-center">
                {" "}
                OTHERS_DEPOSITE LOGGING
            </h1>
            {isWeb3Enabled ? (
                loading || !self ? (
                    <div>loading.....</div>
                ) : (
                    self.othersDeposites.map((d1) => {
                        const { id, depositor, depositee, amount } = d1
                        return (
                            <DFBox
                                depositor={depositor}
                                depositee={depositee}
                                amount={amount}
                                key={`${id}`}
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
