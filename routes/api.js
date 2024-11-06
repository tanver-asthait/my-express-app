import express from "express";
const router = express.Router();
import * as taskController from "../app/controllers/taskController.js";
import * as blogController from "../app/controllers/blogController.js";

// Create Route
router.post("/createTask", taskController.createTask);
router.post("/create-blog", blogController.createBlog);

// Read Route
router.get("/readTask", taskController.readTask);
router.get("/read-blog", blogController.readBlog);

// Update Route
router.put("/updateTask", taskController.updateTask);
router.put("/update-blog", blogController.updateBlog);

// Delete Route
router.delete("/deleteTask", taskController.deleteTask);
router.delete("/delete-blog", blogController.deleteBlog);

export default router;
