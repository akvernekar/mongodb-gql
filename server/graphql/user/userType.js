const {GraphQLObjectType,GraphQLInt,GraphQLString}=require("graphql");


var userType=new GraphQLObjectType({
    name:"users",
    fields:()=>{
        return{
            _id:{type:GraphQLString},
            userName:{type:GraphQLString},
            email:{type:GraphQLString},
            mobile:{type:GraphQLString},
            password:{type:GraphQLString}
        }
    }
});

module.exports={userType};