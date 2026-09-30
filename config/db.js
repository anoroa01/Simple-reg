const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("Connected to Database")
    })
    .catch((e) => {
        console.log(`DB error: ${e}`)
    })
}

module.exports = connectDB