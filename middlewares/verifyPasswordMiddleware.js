const verifyPassword = (req , res, next) => {
    const {password} = req.headers;
    if (password == 1234) {
        next()
    } else {
        res.send({
            message: "Invalid password",
            success: false
        })
    }
}

module.exports = verifyPassword