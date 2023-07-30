const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {

    try {
        let postPerPage = 10
        let page = req.query.page || 1
        const pagePosts = await Post.aggregate([{ $sort: { createdAt: -1 } }])
        .skip(postPerPage * page - postPerPage)
        .limit(postPerPage)
        .exec()
        const count = await Post.count()
        const nextPage = parseInt(page) + 1
        const hasNextPage = nextPage <= (count / postPerPage)
        res.render('index', {
            posts: pagePosts,
            nextPage: hasNextPage ? nextPage : null,
            current: page
        })
    } catch (error) {
        console.log('error', error)
    }
})
router.get('/about', (req, res) => {
    const data = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St'
    }
    res.render('about', { data })
})

function insertPostData() {
    Post.insertMany([
        {
            title: "Building APIs with Node.js 3",
            description: "Learn how to use Node.js to build RESTful APIs using frameworks like Express.js"
        },
        {
            title: "Deployment of Node.js applications",
            description: "Understand the different ways to deploy your Node.js applications, including on-premises, cloud, and container environments..."
        },
        {
            title: "Authentication and Authorization in Node.js",
            description: "Learn how to add authentication and authorization to your Node.js web applications using Passport.js or other authentication libraries."
        },
        {
            title: "Understand how to work with MongoDB and Mongoose",
            description: "Understand how to work with MongoDB and Mongoose, an Object Data Modeling (ODM) library, in Node.js applications."
        },
        {
            title: "build real-time, event-driven applications in Node.js",
            description: "Socket.io: Learn how to use Socket.io to build real-time, event-driven applications in Node.js."
        },
        {
            title: "Discover how to use Express.js",
            description: "Discover how to use Express.js, a popular Node.js web framework, to build web applications."
        },
        {
            title: "Asynchronous Programming with Node.js",
            description: "Asynchronous Programming with Node.js: Explore the asynchronous nature of Node.js and how it allows for non-blocking I/O operations."
        },
        {
            title: "Learn the basics of Node.js and its architecture",
            description: "Learn the basics of Node.js and its architecture, how it works, and why it is popular among developers."
        },
        {
            title: "NodeJs Limiting Network Traffic",
            description: "Learn how to limit netowrk traffic."
        },
        {
            title: "Learn Morgan - HTTP Request logger for NodeJs",
            description: "Learn Morgan."
        },
    ])
}

// insertPostData();














router.get('/contact', (req, res) => {
    const data = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St'
    }
    res.render('contact', { data })
})


module.exports = router