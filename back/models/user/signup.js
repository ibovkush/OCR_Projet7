const db = require("../../connection").db
const bcrypt = require('bcrypt')




//s'incrire

module.exports = (req, res, ) => {

    db.query(`SELECT * FROM users WHERE email=?`, [req.body.email], function (err, result) {
        let user = result[0];
        if (!user) {
            bcrypt
                .hash(req.body.password, 10) //hasher mot de pass 10 fois pour securiser
                .then(hash => {
                    const user = {
                        lastName: req.body.lastName,
                        firstName: req.body.firstName,
                        email: req.body.email,
                        password: hash,
                    }

                    db.query(`INSERT INTO users (lastName, firstName, email, password, avatar_profil) VALUES (?,?,?,?, '')`, [user.lastName, user.firstName, user.email, user.password], function (err, result) {
                        if (err) {
                            res.status(500).json({
                                error: err
                            })
                        } else {
                            res.status(201).json({
                                message: `Bienvenu ${user.lastName} ${user.firstName}!`
                            });
                        }
                    })
                })
                .catch(error => res.status(500).json({
                    error
                }))
        } else {
            res.status(401).json({
                message: "Email déjà pris par une autre utilisateur"
            })
        }
    })
};