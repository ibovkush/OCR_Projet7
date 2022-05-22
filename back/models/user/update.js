const db = require("../../connection").db
const bcrypt = require('bcrypt')
const fs = require('fs');


//modification de profil d'utilisateur
module.exports = (req, res) => {

    let request = `UPDATE users SET lastName = ?, firstName = ?, email = ? `

    let data = [req.body.lastName, req.body.firstName, req.body.email]

    if (typeof req.file !== 'undefined') {
        console.log(req.file)
        request += `, avatar_profil = ?`
        data.push(`${req.file.path}`)
        db.query('SELECT avatar_profil FROM users WHERE id_user = ?', [req.params.id_user], (err, result) => {
            if (err) {
                console.log(err)
            } else if (result[0].avatar_profil != '') {
                fs.unlinkSync(result[0].avatar_profil)
            }
        })
    }

    if (typeof req.body.password === 'undefined' || req.body.password == "") {

        request += `WHERE id_user = ?`
        data.push(Number(req.params.id_user))

        db.query(request, data, (err, result) => {
            if (err) {
                res.status(400).json({
                    err
                });
            }
            res.status(200).json({
                message: `Votre profil modifié`
            })
        })

    } else {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {

                request += `, password = ? WHERE id_user = ?`
                data.push(hash)
                data.push(Number(req.params.id_user))

                db.query(request, data, (err, result) => {
                    if (err) {
                        res.status(400).json({
                            err
                        });
                    }
                    res.status(200).json({
                        message: `Votre profil modifié`
                    })
                })
            })

    }

}