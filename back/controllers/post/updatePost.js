//modification d'un post de l'utilisateur

module.exports = (req, res, next) => {

    if (
        typeof req.body.message == 'undefined' ||
        req.body.message == ''
    ) {
        res.status(400).json({
            error: 'Vouz devriez ecrire quelque chose'
        })
    } else {
        next()
    }

};