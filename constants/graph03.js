import { gql } from "@apollo/client"

const deposite_Others = gql`
    {
        othersDeposites(first: 5) {
            id
            depositor
            depositee
            amount
        }
    }
`

export default deposite_Others
