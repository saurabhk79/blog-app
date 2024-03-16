const router = require("mongoose").Router();
const authenticate = require("../middleware/authenticateToken");
const commentcontroller = require("../controllers/commentController");

router.post("/:blogId", authenticate, commentcontroller.addComment);
router.get("/:blogId", commentcontroller.getAllComments);

module.exports = router;