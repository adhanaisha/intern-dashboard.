const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/user", (req, res) => {
  res.json({ name: "Intern", referral: "intern2025", donations: 500 });
});

app.get("/leaderboard", (req, res) => {
  res.json([
    { name: "Isha", donations: 1200 },
    { name: "Rahul", donations: 900 },
    { name: "Priya", donations: 750 }
  ]);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
