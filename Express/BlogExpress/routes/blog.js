const express = require('express');
const path = require('path');
const blogs = require('../data/blogs');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../templates/index.html"));
});

router.get('/blog', (req, res) => {
    blogs.forEach(e => {
        console.log(e.title);
    });
    res.sendFile(path.join(__dirname, "../templates/blog.html"));
});

router.get('/blogpost/:slug', (req, res) => {
    myBlogs = blogs.filter((e) => {
        return e.slug == req.params.slug;
    });
    res.sendFile(path.join(__dirname, "../templates/blogpage.html"));
});

module.exports = router;