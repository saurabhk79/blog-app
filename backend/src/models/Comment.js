const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },
  },
  {
    timestamp: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
