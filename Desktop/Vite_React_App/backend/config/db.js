const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected : ", conn.connection.host.magenta.underline.bold);
    }
    catch (err) {
        console.error();
        process.exit(1);
    }
}

module.exports = connectDB;