const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer2-config');
const auth = require('../middlewares/auth');
const checkProfilePicture = require('../middlewares/checkProfilPicture');
const profilePCtrl = require('../controllers/profilePicture.controller');

router.post('/', auth, multer, checkProfilePicture, profilePCtrl.create);
router.get('/', profilePCtrl.findAll);
router.delete('/:id', auth, profilePCtrl.delete);

module.exports = router;
