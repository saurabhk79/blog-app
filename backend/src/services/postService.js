const Post = require("../models/Post");

const getAllBlogs = async () => {
  try {
    const blogs = await Post.find({});

    return blogs;
  } catch (error) {
    throw error;
  }
};

const getUserBlogs = async (userId) => {
  try {
    const blogs = await Post.find({ userId });

    return blogs;
  } catch (error) {
    throw error;
  }
};

const getBlogById = async (id) => {
  try {
    const blog = await Post.findById(id);

    return blog;
  } catch (error) {
    throw error;
  }
};

const addBlog = async (userId, data) => {
  try {
    const blog = await Post({ userId, ...data });
    await blog.save();

    return blog;
  } catch (error) {
    throw error;
  }
};

const updateBlog = async (userId, blogId, data) => {
  try {
    const blog = await Post.findOneAndUpdate(
      { _id: blogId, userId },
      { $set: data },
      { new: true }
    );

    return blog;
  } catch (error) {
    throw error;
  }
};

const deleteBlog = async (userId, blogId) => {
  try {
    const blog = await Post.findOneAndDelete({ _id: blogId, userId });

    return blog;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBlogs,
  getUserBlogs,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
};
