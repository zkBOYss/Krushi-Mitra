const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoute");
const productRoutes = require("./routes/productRoute");
const eventRoutes = require("./routes/eventRoute");
const userRoutes = require("./routes/userRoute");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
	cors({
		origin: ["http://localhost:5173"],
		credentials: true,
	})
);

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/events", eventRoutes);
connectDB();

app.listen(5000, () => console.log("Server running on port 5000"));
