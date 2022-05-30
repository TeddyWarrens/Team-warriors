const post_controller =require('../controller/post-controller');
const router = require('express').Router();





router.get('/',async (req,res)=>{
    let posts=post_controller.fetchData();
    // if(!posts.length) return await res.status(404).json({message:"Nothing to display"})
    return await res.status(200).json({posts});
})

router.post('/new',async(req,res)=>{
    const {voltage,resistance,power}=req.body;
    
    let data= await post_controller.addData({
        voltage,
        resistance,
        power,
        
    })
    if(data){
         return await res.status(200).json({posts:data})
         
     console.log('Data inserted in')
    
    }
    else{
        return await res.status(404).json({message:"data wasnt added successfully"});
    }
    
})
module.exports=router;