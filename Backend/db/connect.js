const mongoose = require(`mongoose`);

mongoose.set({strictQuery:false});
const connectdb = (url) =>{
    mongoose.connect(url);
}

module.exports = connectdb;
