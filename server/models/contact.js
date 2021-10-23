/*
Filename: contact.js
Student Name: Prashant Sharma
Student ID: 301175737
Date: Oct 23, 2021
*/


let mongoose=require('mongoose');

//create a model class for contact
let contactModel=mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contacts"
});

module.exports=mongoose.model('Contact', contactModel);