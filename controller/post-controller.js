const {Post}=require('../model/model')
const e=require('express');

const addData= async(data)=>{
    //let post=new Post(data);
    const{voltage,time,resistance,power} =data
   return await Post.create({...data});
    
}

const fetchData=async ()=>{
    return await Post.find({});
}
module.exports={
    addData,
    fetchData
}