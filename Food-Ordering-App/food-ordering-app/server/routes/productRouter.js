const express=require('express');

const router=express.Router()

const Product=require('../models/productModel')

router.get('/products',async(req,res)=>{
    try{
        const products=await Product.find()
        res.status(200).send({data: products})
    }catch(err){
        res.status(400).send({error:err})
    }
})
// to group products by categories
router.get('/products-by-categories',async(req,res)=>{
    try{
        //aggregate function by what we want in to group by 
        const products= await  Product.aggregate([
            { $match:{}},
            {$group:{
                _id:'$category',
                products:{$push:'$$ROOT'}
            }},
            {$project:{name:'$_id',products:1,_id:0}}
        ])
        res.status(200).send({data:products})
    } catch(err){
        res.status(400).send({error:err})
    }
})

module.exports=router