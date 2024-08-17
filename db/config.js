const mongoose = require('mongoose');

dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connect to databes successfull');
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbconnect;