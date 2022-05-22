

//inscription

module.exports = (req, res, next) => {
    let {
        lastName,
        firstName,
        email,
        password
    } = req.body;

    if (lastName == "" || lastName == undefined) {
        return res.status(400).json({
            error: "verifiez votre nom"
        })

    } else if (firstName == "" || firstName == undefined) {

        return res.status(400).json({
            error: "verifier votre prénom"
        })

    } else if (email == "" || email == undefined) {

        return res.status(400).json({
            error: "verifiez votre email"
        })

    } else if (password == "" || password == undefined) {

        return res.status(400).json({
            error: "verifiez votre mot de pass"
        })

    } else if (password.length < 6) {

        return res.status(400).json({
            error: "votre mot de passe n'est pas securisé"
        })

    } else {
        let validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (!validEmail.test(email)) {
            return res.status(400).json({
                error: "Vous ne pouvez pas utiliser ce mail"
            })
        } else {
            next()
        }
    }
};

