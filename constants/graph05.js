import { gql } from "@apollo/client"

const transfer_others = gql`
    {
        transferrings(first: 5) {
            id
            to
            from
            amount
        }
    }
`

export default transfer_others
