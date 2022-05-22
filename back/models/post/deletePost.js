const db = require("../../connection").db

// supprimer le post 
module.exports = (req, res) => {

    db.query(
        'SELECT id_user FROM posts WHERE id_post = ?',
        [req.params.id_post],
        (err, result) => {
            if (err) {
                res.status(400).json({
                    message: "Impossible de supprimer le post !"
                })
            } else if (result[0].id_user == req.body.userId || req.body.admin == 1) {
                db.query(
                    'DELETE FROM comments WHERE id_post = ?',
                    [req.params.id_post],
                    (err, result) => {
                        if (err) {
                            res.status(500).json({
                                error: err
                            })
                        }
                    }
                )
                db.query(
                    'DELETE FROM share WHERE id_post = ?',
                    [req.params.id_post],
                    function (err) {
                        if (err) {
                            res.status(400).json({
                                message: "suppression impossible"
                            })
                        } else {
                            db.query(
                                "DELETE FROM posts WHERE id_post = ?",
                                [req.params.id_post],
                                function (err) {
                                    if (err) {
                                        res.status(400).json({
                                            message: "suppression impossible"
                                        })
                                    }
                                    res.status(200).json({
                                        message: "Post supprimé"
                                    })
                                });
                        }
                    }
                )
            } else {
                res.status(400).json({
                    error: "Droit d'administrateur reqise"
                })
            }
        }
    )


};