const express = require('express')
const Meals = require ('../models/Meals')

const router = app.router()
router.get('/', (req, res) => {
    res.send('hola meals')
})

router.post('/',(req,res) =>{
   res.send('post meals') 
})

module.exports = router
