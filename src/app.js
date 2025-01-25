// const express = require("express");
// const middleware = require("./app1");
// const app = express();
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// app.use(middleware);
// app.get("/hello", (req, res) => res.send("Hello World!"));
// app.listen(3000, () => console.log("Server running on port 3000"));
const express = require("express");
const cors = require("cors");
const middleware = require("auto-docs-cli/middleware");

const app = express();
// Custom middleware
app.use(middleware);

// Middleware for CORS and parsing JSON
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Hey"));
app.get("/hello", (req, res) => res.send("Helloooooooooooo"));
app.get("/sun", (req, res) => res.send("Hi"));

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
