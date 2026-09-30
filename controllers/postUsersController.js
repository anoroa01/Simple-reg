const User = require("../schemas/userModel.js")

const postUsers = async (req, res) => {
    const {name, email} = req.body;

    if (!name || !email) {
        res.send({
            message: "All fields are needed",
            success: false
        })
        return
    }

    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailReg.test(email)) {
        res.send({
            message: "Email format is not valid",
            success: false
        })
        return
    }

    const existingUser = await User.findOne({email})
    if (existingUser) {
        res.send({
            message: "User already exists",
            success: false
        })
        return
    }

    const user = await User.create({
        name,
        email
    })
    res.send({
        message: "User created successfully",
        success: true,
        data: user
    })
}

module.exports = postUsers