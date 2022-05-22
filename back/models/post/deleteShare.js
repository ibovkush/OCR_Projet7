const db = require("../../connection").db

// supprimer le partage
module.exports = (req, res) => {

    db.query(
        'SELECT id_user FROM share WHERE id_share = ?',
        [req.params.id_share],
        (err, result) => {
            if (err) {
                res.status(400).json({ message: "supresstion impossible" })
            } else if (result[0].id_user == req.body.userId || req.body.admin == 1){
                db.query(
                    'DELETE FROM share WHERE id_share = ?',
                    [req.params.id_share],
                    function(err) {
                        if (err) {
                            res.status(400).json({ error: "suppression impossible" })
                        } else {
                            res.status(200).json({ message: "Partage supprimé"})
                        }
                    }
                )
            } else {
                res.status(400).json({error: "Droit d'administrateur requis"})
            }
        }
    )
    

};