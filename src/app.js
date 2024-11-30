const express = require("express");
const middleware = require("./app1");
const app = express();

app.use(middleware);
app.get("/hello", (req, res) => res.send("Hello World!"));
app.listen(3000, () => console.log("Server running on port 3000"));
