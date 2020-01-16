const express = require('express')
const app=express()
const graphqlHTTP = require('express-graphql')
const connectDB =require('./config/database')
const userSchema =require('./server/graphql/user/userSchema')

const port =4055;
connectDB()

app.use('/graphql',graphqlHTTP({
    schema:userSchema,
    graphiql:true
}));



app.listen(port,()=>{
    console.log('listening to port', port)
})