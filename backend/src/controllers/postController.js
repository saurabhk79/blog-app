const postservice = require("../services/postService");

const getAllBlogsPost = async (req, res) => {
  try {
    const blogsList = await postservice.getAllBlogs();

    return res.status(200).json(blogsList);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getMyBlogPost = async (req, res) => {
  try {
    const {userId} = req.user;
    const userBlogs = await postservice.getUserBlogs(userId);

    return res.status(200).json(userBlogs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getBlogsPostById = async (req, res) => {
    try {
      const {blogId} = req.params;
      const userBlogs = await postservice.getBlogById(blogId);
  
      return res.status(200).json(userBlogs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

const addBlogPost = async (req, res) => {
  try {
    const {userId} = req.user;
    const body = req.body;

    const blog = await postservice.addBlog(userId, body);

    return res.status(201).json(blog);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateBlogPost = async (req, res) => {
  try {
    const {userId} = req.user;
    const updatedData = req.body;
    const blogId = req.params.id;

    const updatedBlog = await postservice.updateBlog(
      userId,
      blogId,
      updatedData
    );

    if (!updatedBlog) return res.status(404).json({message : "Not Found!"})

    return res.status(200).json(updatedBlog);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteBlogPost = async (req, res) => {
  try {
    const {userId} = req.user;
    const blogId = req.params.id;
    
    const blog = await postservice.deleteBlog(userId, blogId);
    
    if (!blog) return res.status(404).json({message : "Not Found!"})

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBlogsPost,
  getMyBlogPost,
  getBlogsPostById,
  addBlogPost,
  updateBlogPost,
  deleteBlogPost,
};
