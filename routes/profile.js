var router = require('express').Router();
var postCtrl = require('../controllers/posts')

router.get('/profile', function(req,res){
    res.redirect('/');
});
router.get('/profile', postCtrl.index)
router.post('/profile/posts', isLoggedIn, postCtrl.create)
router.delete('/profile/posts/:id', isLoggedIn, postCtrl.delete)
router.get('/profile/posts/:id/edit', isLoggedIn, postCtrl.edit)
router.put('/profile/posts/:id', isLoggedIn, postCtrl.update)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) {
      return next();
    } else {
      res.redirect('/auth/google');
    }
  }

  module.exports = router;