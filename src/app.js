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
const middleware = require("./app1");
const cors = require("cors");

const app = express();

// Middleware for CORS and parsing JSON
app.use(cors());
app.use(express.json());

// Custom middleware
app.use(middleware);

// Routes
app.get("/hello", (req, res) => res.send("Hello sufiyaaaann!"));

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
