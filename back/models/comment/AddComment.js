const db = require("../../connection").db


//ajouter le commentaire
module.exports = (req, res, next) => {
    db.query(`
        INSERT INTO comments (message, date_comment, id_post, id_user)
        VALUES (?, NOW(), ?, ?)
    `,
    [req.body.message, req.params.id_post, req.body.userId],
    (error, result) => {
        if(error) {
            res.status(500).json({error: error})
        } else {
            res.status(200).json({message: `Commentaire ajouté`})
        }
    })
}