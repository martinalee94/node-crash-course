const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();


router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });

})

router.get('/', blogController.get_blogs);
router.post('/', blogController.create_blog_post);
router.get('/:id', blogController.get_blog_details);
router.delete('/:id', blogController.delete_blog_post);

module.exports = router;