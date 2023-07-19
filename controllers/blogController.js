const Blog = require('../models/blog');

const get_blogs = (req, res) => {
    Blog.find().sort({ createdAt: -1 }) // descending order
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result });
        })
        .catch((err) => {
            console.log(err);
        })
}

const get_blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('detail', { blog: result, title: 'Blog Details' });
        })
        .catch((err) => {
            console.log(err);
        })
}

const create_blog_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
}

const delete_blog_post = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' }); // 성공하면 FE에 redirect 경로를 리턴
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    get_blogs,
    get_blog_details,
    create_blog_post,
    delete_blog_post,
}