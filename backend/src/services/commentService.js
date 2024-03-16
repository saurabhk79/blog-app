const Comment = require("../models/Comment");

const addComment = async (userId, blogId, comment) => {
  try {
    const newComment = await Comment({userId, blogId, comment});
    await newComment.save();

    return newComment;
  } catch (error) {
    throw error;
  }
};

const getAllComments = async(blogId) => {
    try {
        const comments = await Comment.find({blogId});

        return comments;
    } catch (error) {
      throw error;
    }
};

module.exports = { addComment, getAllComments };
