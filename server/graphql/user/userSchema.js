const {GraphQLSchema,GraphQLObjectType,GraphQLList,GraphQLString,GraphQLInt} = require("graphql");
const User =require ('../../models/user')
const {userType} =require('./userType');

var queryType= new GraphQLObjectType({
    name:"Query",
    fields:()=>({
        getAllUsers:{
            type: new GraphQLList(userType),
            resolve:async ()=>{
                return await User.find()
            }
        },
        getUser:{
            type:userType,
            args:{
             _id:{type:GraphQLString}
            },
            resolve:async (args,params)=>{
                return await User.findById(params._id)
            }
        }
    })
});

var mutation =new GraphQLObjectType({
    name:"Mutation",
    fields:{
        addUser:{
            type:userType,
            args:{
                userName:{type:GraphQLString},
                email:{type:GraphQLString},
                mobile:{type:GraphQLString},
                password:{type:GraphQLString}
            },
            resolve:async (args,params)=>{
                   const user =new User(params)
                  return user.save()
                   
            }
        },
        updateUser:{
            type:userType,
            args:{
                _id:{type:GraphQLString},
                userName:{type:GraphQLString},
                email:{type:GraphQLString},
                mobile:{type:GraphQLString},
                password:{type:GraphQLString}
            },
            resolve:async(args,params)=>{
               return User.findByIdAndUpdate(params._id,params,{new: true, runValidators: true })
                   }
            },
            removeUser:{
                type:userType,
                args:{
                    _id:{type:GraphQLString}
                },
                resolve:async(args,params)=>{
                    return User.findByIdAndDelete(params._id)
                }
            }
    },
   
})

module.exports=new GraphQLSchema({
    query:queryType,
    mutation:mutation
});

