 const express = require("express")
const { getAllBooks, createBook, getSingleBook ,updateBook,updateBookPatch,deleteBook} = require("../controllers/bookControllers")
 const router= express.Router()

 //create a book
 router.post("/books/add",createBook)

 //fetch books
 router.get("/books",getAllBooks)

 //get a single book
 router.get("/book/:title",getSingleBook)
 //update a book using put
 router.put("/book/update/:id",updateBook)
 //update book uisng patch
 router.patch("/book/update/:id",updateBookPatch)
 // delete book
 router.delete("/book/:id",deleteBook)


 

 //export router
 module.exports= router