import { gql } from "@apollo/client"

const self_deposite = gql`
    {
        selfDeposits(first: 5) {
            id
            depositor
            amount
        }
    }
`

export default self_deposite
