const mongoose = require(`mongoose`);

const userSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    }
})


const orderSchema = new mongoose.Schema({
    name:{
        type:String
    },
    issueDate:{
        type:Date
    },
    returnDate:{
        type:Date
    },
    isSold:{
        type:Boolean
    },
    user:{
        type:[userSchema]
    }
})

module.exports = mongoose.model('Order',orderSchema);