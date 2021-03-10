const mongoose = require('mongoose');

const mongooseConnection = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        autoIndex: true,
    });

    // eslint-disable-next-line
    console.log('mongoose connected successfully.');

    return connection;
};

module.exports = mongooseConnection;
