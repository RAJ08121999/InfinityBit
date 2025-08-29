const express = require("express");
const router = express.Router();


//import controllers 
const { likepost, unlikePost } = require("../controllers/likeController");
const { createComment } = require ("../controllers/commentController");
const { createPost , getAllPosts} = require("../controllers/postController");



//map controllers with routes
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likepost);
router.post("/likes/unlike",unlikePost);


//export
module.exports = router;