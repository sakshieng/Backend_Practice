const Order = require('../models/Order');
const Book = require(`../models/Book`);
const User = require('../models/User');

const issueBook = async (req, res) => {
    try {
        const { name,username } = req.body;
        const book = await Book.findOne({ bookName: name });
        const user = await User.findOne({ username: username });
        if (!book) res.status(404).json({ msg: 'Book not found' });
        if (!user) res.status(404).json({ msg: 'User not found' });
        const issueDate = new Date().getDate();
        const isSold = false;
        const userArray = [];
        userArray.push(user);
        const returnDate = new Date(issueDate + 7 * 24 * 60 * 60 * 1000);
        const order = await Order.create({ name, issueDate, returnDate, isSold ,user:userArray});
        res.status(201).json({ order });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server error' });
    }
}


const returnBook = async(req,res) => {
    try{
        const { name } = req.body;
        const book = await Book.findOne({ bookName: name });
        if (!book) res.status(404).json({ msg: 'Book not found' });
        const order = await Order.findOneAndDelete({name});
        res.status(200).json({msg:'Book returned successfully!'});
    }catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server error' });
    }
}

const renewBook = async(req,res) => {
    try{
        const { name } = req.body;
        const book = await Book.findOne({ bookName: name });
        if (!book) res.status(404).json({ msg: 'Book not found' });
        const order = await Order.findOne({name});
        order.issueDate = new Date().getDate();
        order.returnDate = new Date(issueDate + 7 * 24 * 60 * 60 * 1000);
        await order.save();
    }catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server error' });
    }
}

module.exports = {issueBook,renewBook,returnBook};