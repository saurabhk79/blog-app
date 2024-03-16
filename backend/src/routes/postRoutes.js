const router = require("mongoose").Router();
const authenticate = require("../middleware/authenticateToken");
const postcontroller = require("../controllers/postController");

router.get("/", postcontroller.getAllBlogsPost);
router.get("/:id", postcontroller.getBlogsPostById);
router.get("/myblog", authenticate, postcontroller.getMyBlogPost);

router.post("/", authenticate, postcontroller.addBlogPost);

router.patch("/:id", authenticate, postcontroller.updateBlogPost);
router.delete("/:id", authenticate, postcontroller.deleteBlogPost);

module.exports = router;
