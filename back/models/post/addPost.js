const db = require("../../connection").db

//creation un post
module.exports = (req, res) => {
    db.query('INSERT INTO posts (message, date_post, id_user) VALUES (?, NOW(), ?)', [req.body.message, req.body.userId], function (err, result) {
        if (err) {
            return res.status(500).json(err.message);
        };
        res.status(201).json({
            message: "Post ajouté"
        })
    });
};