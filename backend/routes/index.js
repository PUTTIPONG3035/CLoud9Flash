const express = require("express");
const http = require('http');
const url = require('url');
const fs = require('fs');
const bcrypt = require('bcryptjs');



router = express.Router();

router.get("/",  async function(req, res, next){
    console.log("folk")
    res.json("FOLk" )
})

router.post("/login", async (req, res, next) =>{
    const { email, password } = req.body;
    console.log(email)

    // Example validation (replace with your actual authentication logic)
    if (email === 'Folk' && password === '1234') {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});


exports.router = router;