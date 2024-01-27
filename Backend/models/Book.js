const mongoose = require(`mongoose`);

const bookSchema = new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    addedOn:{
        type:Date
    }
})

module.exports = mongoose.model('Book',bookSchema);