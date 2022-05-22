const db = require("../../connection").db

//modification d'un post
module.exports = (req, res) => {

    db.query(
        'SELECT id_user FROM posts WHERE id_post = ?',
        [req.params.id_post],
        (err, result) => {
            if (err) {
                res.status(400).json({
                    message: "modification impossible"
                })
            } else if (result[0].id_user == req.body.userId || req.body.admin == 1) {
                db.query(
                    `UPDATE posts
                    SET message = ?
                    WHERE id_post = ?`,
                    [req.body.message, req.params.id_post],
                    function (err) {
                        if (err) {
                            return res.status(500).json(err.message);
                        };
                        res.status(201).json({
                            message: "Poste modifier"
                        })
                    });
            } else {
                res.status(400).json({
                    error: "Droit d'administrateur reqise"
                })
            }
        }
    )



};