const Post = require('./Post')

const resolvers = {
    Query: {
        hello: ()=> { 
            return "hello world"
        },
        getAll: async()=> {
            return await Post.find()
        }
    },
    Mutation: {
        createPost: async (parent, args, context, info)=>{
            const{title, calories} = args.post
            const post = await new Post({title, calories}).save()
            return post
        }
    }
}

module.exports = resolvers