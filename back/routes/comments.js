const router = require('express').Router(); 
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

//les controllers

const CntrlAddComment = require('../controllers/comment/AddComment')
const CntrlDeleteComment = require('../controllers/comment/DeleteComment')
const CntrlUpdateComment = require('../controllers/comment/UpdateComment')
const CntrlShowComment = require('../controllers/comment/Show Comment')

//les models

const ModelAddComment = require('../models/comment/AddComment')
const ModelDeleteComment = require('../models/comment/DeleteComment')
const ModelUpdateComment = require('../models/comment/UpdateComment')
const ModelShowComment = require('../models/comment/ShowComment')



//routes

router.get("/:id_post/comments", auth, CntrlShowComment, ModelShowComment );//afficher les commentaire
router.post("/:id_post/comments", auth, CntrlAddComment, ModelAddComment  );//publier commentaire
router.put("/comments/:id_comment", auth, CntrlUpdateComment, ModelUpdateComment);//modifier commentaire
router.delete("/comments/:id_comment", auth, CntrlDeleteComment, ModelDeleteComment );//supprimer commentaire

module.exports = router;