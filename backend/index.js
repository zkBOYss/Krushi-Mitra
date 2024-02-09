const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const cookieParser = require("cookie-parser");
const app = express();
const authRoutes = require("./routes/authRouter.js");
const productRoutes = require("./routes/productRoutes.js");
const eventRoutes = require("./routes/eventRoutes.js");

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
app.use("/api/products", productRoutes);
app.use("/api/events", eventRoutes);
connectDB();

app.listen(5000, () => console.log("Server running on port 5000"));
