const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const JWT_SECRET = "your_jwt_secret123";

app.post("/api/jwt", async (req, res) => {
    try {
      const { id } = req.body;

      // Generate JWT token
      const token = jwt.sign({ id: id }, JWT_SECRET, { expiresIn: "1h" });
      return res.json({ token });
    } catch (err) {
      console.error("Error during token generation:", err.message);
      return res.status(500).json({ error: "Server error" });
    }
  });
  

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
