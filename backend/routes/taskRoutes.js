const express = require("express");
const Task = require("../models/task");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});

router.post("/", authMiddleware, async (req, res) => {
  const newTask = new Task({ ...req.body, userId: req.user.id });
  await newTask.save();
  res.json(newTask);
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
