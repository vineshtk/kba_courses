const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
// Protected route
// router.get('/', verifyToken, (req, res) => {
// res.status(200).json({ message: 'Protected route accessed' });
// });


///////
router.post("/courses", async (req, res) => {
    try {
      const data = req.body;
      const result = await courses.create(data);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json();
    }
  });
  
  router.put("/courses/:id", async (req, res) => {
    const data = req.body;
    const courseId = data.courseId;
    try {
      const result = await courses.findOneAndUpdate(
        { courseId: courseId },
        req.body,
        { new: true, runValidators: true }
      );
      if (!result) {
        return res.status(404).send("Course not found");
      }
      res.send("Course updated successfully");
    } catch (error) {
      res.status(500).send("Server error");
    }
  });
  
  router.delete("/courses/:id", async (req, res) => {
    const courseId = req.params.id;
    try {
      const result = await courses.findOneAndDelete({ courseId: courseId });
      if (!result) {
        return res.status(404).send("Course not found");
      }
      res.send("Course deleted successfully");
    } catch (error) {
      res.status(500).send("Server error");
    }
  });
  
  router.get("/courses",verifyToken, async (req, res) => {
    const details = await courses.find({});
    res.json(details);
  });
  
  router.get("/courses/:id", async (req, res) => {
    const courseId = req.params.id;
    const details = await courses.findOne({ courseId: courseId }, { _id: 0 });
    res.json(details);
  });


module.exports = router;