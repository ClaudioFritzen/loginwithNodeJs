const express = require('express');
const router = express.Router();

// Signup
router.post('/signup', (req, res) => {
    let {name, email, passowrd, dateOfBirth} = req.body;
    name = name.trim();
    email = email.trim();
    passowrd = passowrd.thim();

    // validacao dos inputs
    if (name == "" || emaii == "" || passowrd == "" || dateOfBirth == ""){
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });

        // falidação do nome
    } else if (!/^[a-zA-Z ]*$/.test(name)) {
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        })
        // validacaoo de email
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        })
    
    // 
    } else if (!new Date(dateOfBirth).getTime()) {
        res.json({
            status: "FAILED",
            message: "Invalid date of birth entered"
        })
    }

})

// Singin
router.post('/singin', (req, res) => {
    
})

module.exports = router;