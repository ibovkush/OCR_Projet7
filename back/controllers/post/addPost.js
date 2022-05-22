//creer le post
module.exports = (req, res, next) => {

    if (
        typeof req.body.message == 'undefined' ||
        req.body.message == ''
    ) {
        res.status(400).json({
            error: 'Vous devriez ecrire quelque chose'
        })
    } else if (
        typeof req.body.userId == 'undefined' ||
        req.body.userId == ''
    ) {
        res.status(400).json({
            error: 'Erreur'
        })
    } else {
        next()
    }

};