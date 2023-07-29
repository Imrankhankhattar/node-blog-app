const express = require('express')
const router  = express.Router()


router.get('/',(req,res)=>{
    const data = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St'
    }
    res.render('index',{data})
})
router.get('/about',(req,res)=>{
    const data = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St'
    }
    res.render('about',{data})
})
router.get('/contact',(req,res)=>{
    const data = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St'
    }
    res.render('contact',{data})
})


module.exports = router