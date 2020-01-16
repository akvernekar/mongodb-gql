const mongoose= require('mongoose')

const connectDB=()=>{
    mongoose.connect('mongodb://localhost:27017/test-gql',{ useUnifiedTopology: true,useNewUrlParser: true })
    .then(()=>{
        console.log('connected to db')
    })
.catch((err)=>{
    console.log(err)
})
}

module.exports=connectDB