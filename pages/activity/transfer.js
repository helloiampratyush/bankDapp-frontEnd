import { useQuery } from "@apollo/client"
import transfer_Others from "../../constants/graph05"
import { useMoralis } from "react-moralis"
import TFBox from "../../components/transBox"
export default function selfDeposite() {
    const { loading, error, data: self } = useQuery(transfer_Others)
    const { isWeb3Enabled } = useMoralis()
    return (
        <div className="container mx-auto m-4 ">
            <h1 className="text-2xl text-purple-900 bg-neutral-300 text-center">
                {" "}
                TRANSFER LOGGING
            </h1>
            {isWeb3Enabled ? (
                loading || !self ? (
                    <div>loading.....</div>
                ) : (
                    self.transferrings.map((d1) => {
                        const { id, to, from, amount } = d1
                        return <TFBox to={to} from={from} amount={amount} key={`${id}`} />
                    })
                )
            ) : (
                <div>web3 is not Enabled</div>
            )}
        </div>
    )
}
