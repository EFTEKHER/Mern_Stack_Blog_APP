import express from 'express';
import mongoose from 'mongoose';
import { getAllBlogs,addBlog ,updateBlog,getById,deleteBlog,getByUserId} from '../controllers/blog-controllers.mjs';
const blogRouter=express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getByUserId);
export default blogRouter;