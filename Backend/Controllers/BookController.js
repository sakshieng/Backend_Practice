const Book = require('../models/Book');


const createBook = async (req,res) => {
    try{
    const {bookName,authorName,price} = req.body;
    const addedOn = Date.now();
    const book = await Book.create({bookName,authorName,price,addedOn});
    res.status(201).json(book);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:'Bad request'});
    }
    // res.send('Book created successfully!');
} 

const getSingleBook = async(req,res)=>{
    try{
        const {bookName} = req.body;
        const book = await Book.findOne({bookName});
        if(!book) res.status(404).json({msg:'Book not found!'});
        res.status(200).json(book);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:'Bad request'});
    }
}

const getAllBooks = async(req,res)=>{
    try{
        const book = await Book.find({});
        res.status(200).json(book);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:'Bad request'});
    }
}

const updateBook = async(req,res)=>{
    try{
        const {bookName,newPrice} = req.body;
        const book = await Book.findOne({bookName});
        if(!book) res.status(404).json({msg:'Book not found!'});
        book.price = newPrice;
        book.save();
        res.status(200).json(book);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:'Bad request'});
    }
}

const deleteBook = async(req,res)=>{
    try{
        const {bookName} = req.body;
        const book = await Book.findOneAndDelete({bookName});
        res.status(200).json({msg:'Book is deleted!'});
    }catch(err){
        console.log(err);
        res.status(500).json({msg:'Bad request'});
    }
}

module.exports = {createBook,getSingleBook,getAllBooks,updateBook,deleteBook};