const db = require("../../connection").db

//partager le post
module.exports = (req, res) => {

    db.query(
        "INSERT INTO share (id_user, id_post, date_share) VALUES (?, ?, NOW())",
        [req.body.userId, req.params.id_post],
        function (err, result) {
            if (err) {
                return res.status(500).json(err.message);
            };
            res.status(201).json({
                message: "Partagé"
            });
        });

};