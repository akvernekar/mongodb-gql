const mongoose =require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:(value)=>{
                return validator.isEmail(value)
            },
            message:()=>{
                return "Invalid Email"
            }
        }
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10

    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:128
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User
