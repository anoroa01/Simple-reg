const User = require("../schemas/userModel.js")

const getUsers = async (req, res) => {

    const data = await User.find()
    res.send({
        message: "Fetched all users",
        success: true,
        data
    })
}

module.exports = getUsers