import { gql } from "@apollo/client"

const self_Withdraw = gql`
    {
        selfWithdraws(first: 5) {
            id
            beneficiaries
            amount
        }
    }
`

export default self_Withdraw
