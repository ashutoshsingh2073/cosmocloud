const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const JWT_SECRET = "your_jwt_secret123";

app.post("/api/login", async (req, res) => {
    // try {
    //   const { email, password } = req.body;
  
    //   // Check if user exists
    //   const user = users.find((user) => user.email === email);
    //   if (!user) return res.status(400).json({ error: "Invalid email or password" });
  
    //   // Check if password matches
    //   const isMatch = await bcrypt.compare(password, user.password);
    //   if (!isMatch) return res.status(400).json({ error: "Invalid email or password" });
  
    //   // Generate JWT token
    //   const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    //   return res.json({ token });
    // } catch (err) {
    //   console.error("Error during login:", err.message);
    //   return res.status(500).json({ error: "Server error" });
    // }
    try{
    console.log("ooo");
    }
    catch(err){
        console.log("Error:",err);
    };
  });
  

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
