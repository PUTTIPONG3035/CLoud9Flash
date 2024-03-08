const express = require("express");
const http = require('http');
const url = require('url');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const  { createOrUpdate, deleteUserById, getUserById, readAllUsers } = require('../db.js');



router = express.Router();

router.get("/",  async function(req, res, next){
    const { success, data } = await readAllUsers()

    if(success){
        return res.json({success, data})
    }
    return res.status(500).json({success:false, messsage: "Error"})
})

router.post("/login", async (req, res, next) =>{
    const { username, password } = req.body;
    console.log(username)

    // Example validation (replace with your actual authentication logic)
    if (username === 'Folk' && password === '1234') {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});


router.post("/register", async(req, res, next) =>{
    const { username, password, id } = req.body;
    console.log(req.body)

    // Example validation (replace with your actual authentication logic)
    try{
         const { success, data } = await createOrUpdate(req.body)
         res.json({ message: 'register successful' });
    }
    catch(err){
         res.status(401).json({ message: 'Invalid credentials' });
    }
       
   
       
    
});


exports.router = router;