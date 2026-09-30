require("dotenv").config()
const express = require("express")
const connectDB = require("./config/db");
const router = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/", router)

const port = process.env.PORT || 8000;


app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDB();
})