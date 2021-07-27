const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Post {
        id:ID
        title: String
        calories: String
    }

    type Query {
        hello: String
        getAll: [Post]
    }

    input PostInput {
        title: String
        calories: String
    }
    type  Mutation {
        createPost(post: PostInput): Post
    }
`
module.exports = typeDefs