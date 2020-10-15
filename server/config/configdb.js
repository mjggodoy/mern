const moongose = require('mongoose');
require('dotenv').config({path: 'variable.env'});

const connectDB = async() => {
    console.log(process.env.DB_MONGO);
    try {
        await moongose.connect(process.env.DB_MONGO, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('connected DB');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB;