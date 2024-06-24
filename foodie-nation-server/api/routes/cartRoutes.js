const express=require("express");
const Carts=require('../models/Carts');
const {route}=require('./menuRoutes');
const router=express.Router();

const cartController = require('../controllers/cartControllers');

router.get('/',cartController.getCartsByEmail);
router.post('/',cartController.addToCart);
router.delete('/:id',cartController.deleteCart);
router.put('/:id',cartController.updateCart);
router.get('/:id',cartController.getSingleCart);

module.exports=router;
