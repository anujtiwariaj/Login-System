const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Body parser middleware to handle form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Mock user data for demo purposes
const users = [{ email: "user@example.com", password: "password123" }];

// Route to handle login requests
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists and password matches
    const user = users.find(
        (u) => u.email === email && u.password === password,
    );

    if (user) {
        res.send("<h2>Login successful!</h2>");
    } else {
        res.send("<h2>Invalid email or password. Please try again.</h2>");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
