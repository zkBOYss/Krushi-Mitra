const express = require("express");
const verifyToken = require("../middlewares/verifytoken");
const router = express.Router();

router.get("/profile", verifyToken , async (req,res) =>{
    
});