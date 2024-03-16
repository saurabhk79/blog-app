const commentservice = require("../services/commentService");

const addComment = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { blogId } = req.params;
    const body = req.body;

    const comment = await commentservice.addComment(
      userId,
      blogId,
      body.comment
    );

    return res.status(201).json(comment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const { blogId } = req.params;
    const comments = await commentservice.getAllComments(blogId);

    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { addComment, getAllComments };
