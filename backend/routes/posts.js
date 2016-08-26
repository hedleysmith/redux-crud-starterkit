var express = require('express');
var Post = require('../models/post');
var router = express.Router();

/**
 * /posts route
 */
router.route('/')

// GET /api/v1/posts
.get(function(req, res) {

  Post.find()
  .sort({ date_latest: 'desc'})
  .exec(function(err, posts) {
    if (err) {
      res.send(err);
    } else {
      res.json(posts);
    }
  });
})

// POST /api/v1/posts
.post(function(req, res) {
  var post = new Post();
  post.body = req.body.body;
  post.author = req.body.author;

  post.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      console.log("Post created");
      res.json({
        message: 'New post created.',
        id: post['_id']
      });
    }
  });
});

/**
 * /api/v1/posts/:post_id route
 */
router.route('/:post_id')

// GET /api/v1/posts/:post_id
.get(function(req, res) {
  Post
  .findOne({'_id': req.params.post_id})
  .exec(function(err, post) {
    if (err) {
      console.error('Error GETing post');
      res.send(err);
    } else {
      res.json({ post });
    }
  });
})

// DELETE /api/v1/posts/:post_id
.delete(function(req, res) {
  Post.remove({
    _id: req.params.post_id
  }, function(err, post) {
    if (err) {
      console.error('Error deleting post');
      res.status(400).send({error: "Error deleting post"}); 
    } else {
      res.json({
        message: 'Deleted post'
      });
    };
  });
});

module.exports = router;
