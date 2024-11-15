const mongoose = require('mongoose')
const prouctSchema = new mongoose.Schema({
productId:{
	type:[Number,"Product ID is must to be entered"],
	required:true
},
productName:{
type:[String,"Product Name is must"],
require:true,
default:"Empty or yet to fill"
},
stock:{
type:[Number,"Stock Nmber should be greater than 100 and less than 200"],
min:100,
max:200,
required:true
},
price:{
type:Number,
default:0,
},
category:{
type:String,
default:"Empty or yet to fill"
}



})
module.exports =mongoose.model("Product", productSchema)
