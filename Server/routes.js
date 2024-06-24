const Router = require("express");
const courses = require("./models/courses.js");
const session = require("express-session");
const cookieParser = require("cookie-parser");
var router = Router();

// Session handling routes

// Middleware setup
router.use(
  session({
    secret: "vtk",
    resave: false,
    saveUninitialized: false,
  })
);

router.use(cookieParser());


// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

// Routes
router.get("/", isAuthenticated, (req, res) => {
  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});


router.post("/login", Router.urlencoded({ extended: true }), (req, res) => {
  const { username, password } = req.body;

  // Check if the provided credentials are valid
  if (username === "admin" && password === "admin") {
    // Store user data in the session
    req.session.user = username;
    res.cookie("sessionId", req.sessionID);

    res.redirect("/profile");
  } else {
    res.send("Invalid credentials. Please try again.");
  }
});

router.get("/profile", isAuthenticated, (req, res) => {
  // Retrieve user data from the session
  const userData = req.session.user;
  res.send(`Welcome, ${userData.username}!
<a href="/logout">Logout</a>`);
});

router.get("/logout", (req, res) => {
  // Destroy the session and redirect to the login page
  req.session.destroy(() => {
    res.clearCookie("sessionId");
    res.redirect("/login");
  });
});

/////////
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

router.get("/courses", async (req, res) => {
  const details = await courses.find({});
  res.json(details);
});

router.get("/courses/:id", async (req, res) => {
  const courseId = req.params.id;
  const details = await courses.findOne({ courseId: courseId }, { _id: 0 });
  res.json(details);
});

module.exports = router;
