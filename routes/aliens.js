const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

//GET REQUEST
router.get('/',async (req,res)=>{
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(error){
        res.send("Error:",error)
    }
})

//POST REQUEST
router.post('/',async (req,res)=>{
    const alien = new Alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send("Error:",err)
    }

})

//GET REQUEST by Id
router.get('/:id',async (req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send("Error:",err)
    }
})

//PATCH REQUEST by Id
router.patch('/:id',async (req,res) => {
    try{
        const alien = await Alien.findById(req.params.id)
       if (!alien) {
            return res.status(404).send("Alien not found");
        }
        const updatableFields = ['sub', 'name', 'tech'];
        updatableFields.forEach(field => {
            if (req.body[field] != null) {
                alien[field] = req.body[field];
            }
        });
        const updatedAlien = await alien.save();
        res.status(200).json(updatedAlien);
    }catch(err){
        res.status(500).send("Error updating alien")
    }
})

//DELETE REQUEST
router.delete('/:id',async (req,res) =>{
    try{
        const result = await Alien.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).send("Alien not found");
        }
       res.send("Alien deleted successfully");
    }catch(err){
        res.status(500).send("Error deleting alien");
    }
})

module.exports = router