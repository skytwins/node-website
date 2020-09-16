const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (req, res)=>{
    //res.sendFile(path.join(__dirname, "views/index.html"))
    res.render('index', {app: 'First WebSite', title: 'Home'})
})

router.get('/contact', (req, res)=>{
    res.render('contact', {app: 'First WebSite',title: 'Contacto'})
})

module.exports = router