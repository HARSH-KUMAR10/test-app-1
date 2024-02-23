const express = require("express");
const app = express();
const path = require("path");
const staticApp = express();
const PORT = process.env.PORT || 8000;
const STATIC_PORT = process.env.STATIC_PORT || 80;
const cors = require("cors");

staticApp.listen(STATIC_PORT, () => {
  console.log(`http://localhost:${STATIC_PORT}`);
});

staticApp.use(express.static(path.join(__dirname, "build")));

staticApp.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({
    statusCode: 200,
    data: { message: "SUCCESS" },
  });
});

app.get("/api/home", (req, res) => {
  console.log("home-page");
  res.json({
    statusCode: 200,
    data: [
      { item: "Item-1" },
      { item: "Item-2" },
      { item: "Item-3" },
      { item: "Item-4" },
      { item: "Item-5" },
      { item: "Item-6" },
    ],
  });
});

app.get("/api/about", (req, res) => {
  res.json({
    statusCode: 200,
    data: [
      { item: "About-1" },
      { item: "About-2" },
      { item: "About-3" },
      { item: "About-4" },
      { item: "About-5" },
      { item: "About-6" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
