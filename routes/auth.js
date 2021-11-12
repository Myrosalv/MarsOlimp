const express = require('express');
const router = express.Router();


router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/solar3d', (req, res) => {
    res.render('solar3d')
})

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router;