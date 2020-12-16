var router = require('express').Router();
const profilesCtrl = require('../controllers/profiles');


router.get('/profile', profilesCtrl.index);
router.get('/profile', profilesCtrl.create);


module.exports = router;