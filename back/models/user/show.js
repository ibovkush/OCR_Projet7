const db = require("../../connection").db

//affiche le profil d'utilisateur

module.exports = (req, res, next) => {
    db.query(
        'SELECT * FROM users WHERE id_user = ?',
        [req.params.id_user],
        (err, result) => {
            if(err){
                res.status(400).json({error: err})
            } else {
                res.status(200).json({
                    id_user: result[0].id_user,
                    lastName: result[0].lastName,
                    firstName: result[0].firstName,
                    email: result[0].email,
                    avatar_profil: result[0].avatar_profil == '' ? '' : `${req.protocol}://${req.get("host")}/${result[0].avatar_profil}`,
                    
                })
            }
        }
    )
}