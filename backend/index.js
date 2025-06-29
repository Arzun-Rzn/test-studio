const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error", err));

// Routes
const artworkRoutes = require("./routes/artworks");
app.use("/api/artworks", artworkRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
