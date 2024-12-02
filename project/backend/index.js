require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Import routes
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(express.json());

// CORS configuration to allow frontend from localhost:5173 (for development)
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true, // Allow cookies if needed
  }),
);

// Example route to check if backend is running
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Apply routes
app.use("/api/auth", authRoutes); // All auth-related routes will use this base path

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit the application on connection failure
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log("MongoDB URI:", process.env.MONGO_URI); // Optional: for debugging purposes
console.log("Happy phase 3 turn in");
