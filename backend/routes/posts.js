const router = require("express").Router();
let Post = require("../models/posts.model");

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const userName = req.body.userName;
  const body = req.body.body;
  const date = Date.parse(req.body.date);
  const postNumber = Number(req.body.postNumber);

  const newPost = new Post({
    userName,
    body,
    date,
    postNumber,
  });

  newPost
    .save()
    .then(() => res.json("Post added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
