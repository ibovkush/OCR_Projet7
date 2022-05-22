//partager le post
module.exports = (req, res, next) => {

    if (
        typeof req.params.id_post == 'undefined' ||
        req.params.id_post == ''
    ) {
        res.status(400).json({
            error: 'Impossible'
        })
    } else {
        next()
    }

};