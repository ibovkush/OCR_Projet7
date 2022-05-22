
const db = require("../../connection").db

//modification de profil

module.exports = (req, res, next) => {

    let validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let {
        lastName,
        firstName,
        email,
        password
    } = req.body;
    console.log(req.body)

    if (email == "" || email == undefined || !validEmail.test(email)) {

        return res.status(400).json({
            error: "Verifier votre email"
        })

    } else if ((password != "" || password != undefined) && password < 8) {

        return res.status(400).json({
            error: "Votre mot de passe n'est pas assez securisé"
        })

    } else if (firstName == "" || firstName == undefined) {

        return res.status(400).json({
            error: "verifiez votre prenom"
        })

    } else if (lastName == "" || lastName == undefined) {

        return res.status(400).json({
            error: "verifiez votre nom"
        })

    } else {
        next()
    }

};