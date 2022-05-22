const db = require("../../connection").db
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcrypt')

//connexion

module.exports = (req, res) => {

    db.query(`SELECT * FROM users WHERE email=?`, [req.body.email], function (err, result) {
        let user = result[0];
        if (!user) return res.status(401).json({
            error: "Verifiez votre email"
        });
        bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({
                        error: " Verifiez votre mot de pass"
                    })
                }
                console.log("connexion reussi");
                res.status(200).json({
                    userId: user.id_user,
                    admin: user.admin,
                    token: jwt.sign({
                            userId: user.id_user,
                            admin: user.admin
                        },
                        process.env.TOKEN_KEY, {
                            expiresIn: "24h"
                        },
                    ),
                })
            })
            .catch(error => res.status(500).json({
                error: "Erreur"
            }));
    })
}