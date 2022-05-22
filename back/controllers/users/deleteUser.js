const db = require("../../connection").db
const fs = require('fs');

// supprimer  le profil
module.exports = (req, res) => {

    db.query('DELETE FROM comments WHERE id_user = ?', [req.params.id_user], (err) => {
        if (err) {
            res.status(500).json({
                error: err
            })
        }
    })

    db.query('SELECT avatar_profil FROM users WHERE id_user = ?', [req.params.id_user], (err, result) => {
        if (err) {
            res.status(500).json({
                error: err
            })
        } else if (result[0].avatar_profil.length != 0) {
            fs.unlinkSync(result[0].avatar_profil)
        }

        db.query('SELECT id_post FROM posts WHERE id_user = ?', [req.params.id_user], (err, posts) => {
            if (err) {
                res.status(500).json({
                    error: err
                })
            } else {
                posts.forEach(post => {
                    db.query('DELETE FROM share WHERE id_post = ?', [post.id_post], (err) => {
                        if (err) {
                            res.status(500).json({
                                error: err
                            })
                        }
                    })
                    db.query('DELETE FROM comments WHERE id_post = ?', [post.id_post], (err) => {
                        if (err) {
                            res.status(500).json({
                                error: err
                            })
                        }
                    })
                })
            }
        })

        db.query('DELETE FROM posts WHERE id_user = ?', [req.params.id_user], (err) => {
            if (err) {
                res.status(500).json({
                    error: err
                })
            }
        })

        db.query('DELETE FROM share WHERE id_user = ?', [req.params.id_user], (err) => {
            if (err) {
                res.status(500).json({
                    error: err
                })
            }
        })

        db.query('DELETE FROM users WHERE id_user = ?', [req.params.id_user], (err) => {
            if (err) {
                res.status(500).json({
                    error: err
                })
            }
        })

        res.status(200).json({
            message: 'Profil supprimé'
        })

    })
}