const router = require("express").Router();
const authenticate = require("../middleware/authenticateToken");
const postcontroller = require("../controllers/postController");

router.get("/", postcontroller.getAllBlogsPost);
router.get("/user/blog", authenticate, postcontroller.getMyBlogPost);
router.get("/:blogId", postcontroller.getBlogsPostById);

router.post("/", authenticate, postcontroller.addBlogPost);

router.patch("/:id", authenticate, postcontroller.updateBlogPost);
router.delete("/:id", authenticate, postcontroller.deleteBlogPost);

module.exports = router;
