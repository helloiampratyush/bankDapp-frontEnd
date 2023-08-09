import { gql } from "@apollo/client"

const feed_back = gql`
    {
        feedBackTimes(first: 5) {
            id
            provider
            feedback
        }
    }
`

export default feed_back
