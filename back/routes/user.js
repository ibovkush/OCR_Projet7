const router = require('express').Router(); 
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const isAdmin = require('../middleware/isAdmin')

//importer le contreller

const cntrlSignup = require('../controllers/users/signup');
const cntrlLogin = require('../controllers/users/login');
const cntrlShow = require('../controllers/users/showUser');
const cntrlUpdate = require('../controllers/users/updateUser');
const cntrlDelete = require('../controllers/users/deleteUser');

//importer le model

const ModelSignup = require('../models/user/signup')
const ModelLogin = require ('../models/user/login')
const ModelShow = require ('../models/user/show')
const modelUpdate = require('../models/user/update')
const modelDelete = require('../models/user/delete')


//les routes//
router.post('/signup', cntrlSignup, ModelSignup);//s'inscrire
router.post('/login', cntrlLogin, ModelLogin);//se connecter
router.get('/:id_user', auth, cntrlShow,ModelShow);//afficher le profil    
router.put('/:id_user', auth, multer, isAdmin, cntrlUpdate,modelUpdate);//modifier le profil
router.delete('/:id_user', auth, isAdmin, cntrlDelete, modelDelete)//supprimer le profi'


module.exports = router