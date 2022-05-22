const router = require('express').Router(); 
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')



//les controllers

const CntrlAddPost = require('../controllers/post/addPost')
const CntrlDeletePost =require('../controllers/post/deletePost')
const CntrlUpdatePost = require('../controllers/post/updatePost')
const CntrlSharePost = require('../controllers/post/sharePost')
const CntrlShowPost = require('../controllers/post/showPosts')
const CntrlShowUserPost = require('../controllers/post/showUserPost')
const CntrlDeleteShare = require('../controllers/post/deleteShare')

//les models

const ModelAddPost = require('../models/post/addPost')
const ModelDeletePost = require('../models/post/deletePost')
const ModelUpdatePost = require('../models/post/updatePoste')
const ModelSharePost = require('../models/post/sharePost')
const ModelShowPost = require('../models/post/showPosts')
const ModelShowUserPost = require('../models/post/showUserPost')
const ModelDeleteShare = require('../models/post/deleteShare')



//routes

router.post('/', auth, CntrlAddPost, ModelAddPost);//ajouter le post
router.put('/:id_post', auth, CntrlUpdatePost, ModelUpdatePost);//modifier les post
router.delete('/:id_post', auth, CntrlDeletePost, ModelDeletePost);//supprimer les post
router.get('/', auth, CntrlShowPost,ModelShowPost);//afficher les posts
router.get('/:id_user', auth, CntrlShowUserPost, ModelShowUserPost)//afficher les post de l'utilisateur
//les post partage
router.post('/share/:id_post', auth, CntrlSharePost, ModelSharePost)
router.delete('/share/:id_share', auth, CntrlDeleteShare, ModelDeleteShare)

module.exports = router;
