const mongoose = require(`mongoose`);
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please enter valid username']
    },
    email:{
        type:String,
        required:[true,'Please enter your email!']
    },
    phone:{
        type:String,
        required:[true,'Please enter your phone number!']
    },
    password:{
        type:String,
        required:[true,'Please enter valid password']
    }
})

module.exports = mongoose.model('User',userSchema);