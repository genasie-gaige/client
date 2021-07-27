import {gql} from "@apollo/client"

export const CREATE_POST = gql`
    mutation createPost($title: String, $calories: String){
        createPost(post: {title: $title, calories: $calories}){
            id
            title
            calories
        }
    }
`