const express = require('express');
const Model = require('../models/model');
const router = express.Router();

//Post Method
router.post('/post/:prodname', async (req, res) => {
    
    const reviewData = new Model({
        prodName:req.body.prodName,
        name:req.body.name,
        review:req.body.review
    })
   

    try {
        const dataToSave1 = await reviewData.save();
        res.status(200).json(dataToSave1)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/post', async (req, res) => {
    
    const data = new Model({
        prodname: req.body.prodname,
        price: req.body.price,
        manufacture:req.body.manufacture,
        expiry:req.body.expiry
    })
   

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.find({prodName:req.params.id});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;