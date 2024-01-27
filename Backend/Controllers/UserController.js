const User = require(`../models/User`);

const createUser = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const user = await User.create({ username, email, phone, password });
        
        const userWithoutPassword = await User.findById(user._id).select('-password');

        res.status(201).json({ user: userWithoutPassword });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server error' });
    }
}

module.exports = {createUser};