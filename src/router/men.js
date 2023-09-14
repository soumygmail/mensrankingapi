const express = require('express');
const router = new express.Router();

const MensRanking = require("../model/olympic");




router.post("/mens",async (req,res) => {
    try{
     const addingMensRanking = new  MensRanking(req.body)
     console.log(req.body)
     //   {
    //     "ranking": 1,
    //     "name" : "Christian COLEMAN",
    //     "dob":"06 MAR 1996",
    //     "country": "USA",
    //     "score":"1477"

    //  }

   
    
    const piku =  await addingMensRanking.save();
    res.status(201).send(piku)
    }catch(e){
      res.status(400).send(e);
    }

})



router.get("/mens" ,async(req, res)=>{
    try{
    const getmens =  await MensRanking.find({}).sort({"ranking":1});
    res.status(201).send(getmens);
    }catch(e){
        res.status(400).send(e)
    }
})

router.get("/", async (req, res) =>{
    res.send("Hello from the thapa")
})

router.get("/mens/:id",async(req,res)=>{
try{
    const _id = req.params.id;
    const getMens = await MensRanking.find();
    res.send(getMens)
}catch(e){
    res.status(400).send(e)
}
})

router.get("/mens/:id", async(req, res)=>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id);
        res.send(getMen);
    }catch(e){
        res.status(400).send(e)
    }
})


 //we will handle the patch request
router.patch("/mens/:id", async(req, res)=>{  // path is used to modify to update the only needed data..not the complete data..
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id);
        res.send(getMen);
    }catch(e){
        res.status(500).send(e)
    }
})



// we will hadle delete request.

router.delete("/mens/:id", async(req, res)=>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id);
        res.send(getMen);
    }catch(e){
        res.status(500).send(e)
    }
})


module.exports = router