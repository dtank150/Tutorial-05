var express = require('express');
var engineer = require('./Models/engineer')
var router = express.Router();


//to fetch data
router.get('/engineer',async(req,res)=>{
    const edata = await engineer.find()
    res.send(edata)
})

//to add the data
router.post("/engineer",async(req,res)=>{
    const edata = new engineer({
        name:req.body.name,
        branch:req.body.branch
    })

    await edata.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating data

router.patch('/engineer/:id',async (req,res)=>{
    const edata = await engineer.findOne({_id:req.params.id})
    edata.name = req.body.name
    edata.branch = req.body.branch
    await edata.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api data
router.delete("/engineer/:id",async(req,res)=>{
    const _id = req.params.id;
    const data = await engineer.findByIdAndDelete(_id)
    res.send(data);
})

module.exports = router 