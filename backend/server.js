const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const ejs = require("ejs");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();
const driverRoutes = require("./routes/driverRoutes");
const adminRoutes = require("./routes/adminRoutes");
const RestaurantRoutes = require("./routes/RestuarantRoutes");

const app = express();

// Middleware setup
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5172",
      "https://cinab.co.vercel.app",
      "https://e-procurement.onrender.com",
    ],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Register routes
app.use("/v1", adminRoutes);
app.use("/v1", RestaurantRoutes)
app.use("/v1", driverRoutes);

const port = process.env.PORT || 5000;

// Socket.IO setup
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:5172",
      , "https://cinab.co.ke"],
    credentials: true,
  },
});

// Handle Socket.IO connections
io.on("connection", (socket) => {
  console.log("Client connected");

  // Example event handling
  socket.on("test-event", (data) => {
    console.log("Received test event:", data);
    // Emit a response if needed
    socket.emit("response-event", { message: "Response from server" });
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
