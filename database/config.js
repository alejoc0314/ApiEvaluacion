const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Connection established successfully');
    } catch (error) {
        console.error(error);
        throw new Error('Error conectando a la base de datos');
    };
};

module.exports = { dbConnection };