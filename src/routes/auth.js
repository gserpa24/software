const express = require('express');
const router = express.Router();

const passport = require('passport');
//PARA TODA RUTA PROTEGIDA
const { isLoggedIn, isNotLoggedin } = require('../lib/auth');



router.get('/signup', isLoggedIn, (req, res) => {
    res.render('auth/signup')
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
})  
    //console.log(req.body)
);

router.get('/signin', isNotLoggedin, (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

router.get('/logout', isLoggedIn, (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/signin');
    });
});




module.exports = router;