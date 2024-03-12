const express = require("express");

    
const  { createOrUpdateFlashCard, deleteFlashCardById, getFlashCardById, readAllFlashCardSet } = require('../query/flashDB.js');

const router = express.Router()

// READ ALL Users
router.get('/flashcardset', async(req, res) => {
    const { success, data } = await readAllFlashCardSet()

    if(success){
        return res.json({success, data})
    }
    return res.status(500).json({success:false, messsage: "Error"})
})

// Get User by ID
router.get('/flashcardset/:id', async(req, res) => {
    const { id } = req.params
    const { success, data } = await getFlashCardById(id)
    console.log(data)
    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})


// Create User
router.post('/flashcardset', async(req, res) => {
    console.log("post flashcard set")
    const { success, data } = await createOrUpdateFlashCard(req.body)

    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: 'Error'})
})


// Update User by ID
router.put('/flashcardset/:id', async(req, res) => {
    const user = req.body
    const { id } = req.params
    user.id = parseInt(id)

    const { success, data } = await createOrUpdateFlashCard(user)

    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})


// Delete User by Id
router.delete('/flashcardset/:id', async (req, res) => {
    const { id } = req.params
    const { success, data } = await deleteFlashCardById(id)
    if (success) {
      return res.json({ success, data })
    }
    return res.status(500).json({ success: false, message: 'Error'})
})
  



exports.router = router;