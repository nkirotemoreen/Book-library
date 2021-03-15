const mongoose= require("mongoose");
const { Schema } = mongoose;


//define schema
const bookSchema = new Schema({
title:{type:String,required:true},
author:{type:String,required:true},
description:{type:String,required: true},
content:{type:String,required:true},



        

   




})

//define model
const Book = mongoose.model('Book', bookSchema);


//export model
module.exports =Book;