//connexion

module.exports = (req, res, next) => {

    let {
        email,
        password
    } = req.body;

    if (email == "" || email == undefined) {
        return res.status(400).json({
            error: "verifiez votre mail"
        })

    } else if (password == "" || password == undefined) {
        return res.status(400).json({
            error: "Verifiez votre mot de pass"
        })
    }
    next()
};