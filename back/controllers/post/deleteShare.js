//supression de partage 

module.exports = (req, res, next) => {

    if (
        typeof req.params.id_share == 'undefined' ||
        req.params.id_share == ''
    ) {
        res.status(400).json({
            error: 'impossible'
        })
    } else {
        next()
    }
};