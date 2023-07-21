const Review = require('../models/review');

const get_reviews = (req, res) => {
    Review.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render() // TODO: view & rendering are required
        })
        .catch((err) => {
            console.log(err);
        })
}
module.exports = { get_reviews }