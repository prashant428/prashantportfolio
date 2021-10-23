/*
Filename: contact.js
Student Name: Prashant Sharma
Student ID: 301175737
Date: Oct 23, 2021
*/

let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');

//crate a reference to the model
let Contact=require('../models/contact');

//Sorting and displaying the contact list by name in an ascending order
module.exports.displayContactList= (req, res, next) => {
    Contact.find().sort({"name":1}).exec((err, contactList) =>{
        if(err){
            return console.error(err)
        }
        else{
           //console.log(ContactList);
           res.render('businessContact/list',
            {title: "Business Contact List",
            ContactList: contactList,
            displayName: req.user? req.user.displayName : '' });
        }
    });
}

//Displaying the update page
module.exports.displayUpdatePage=(req, res, next)=>{
    let id=req.params.id;

    Contact.findById(id, (err, contactToUpdate)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('businessContact/update', 
            {title: "Update Contact",
             contact: contactToUpdate,
             displayName: req.user? req.user.displayName : '' })
        }
    });
}

//Processing the Update page
module.exports.processUpdatePage=(req, res, next)=>{
    let id=req.params.id

    let updatedContact=Contact({
        "_id": id,
        "name":req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, updatedContact, (err)=>{
        if(err){
            console.log(err);
             res.end(err);
        }
        else{
            //refresh the contact list
            res.redirect('/businessContact');
        }
    });
}

//Deleting selected contact by Id
module.exports.performDelete=(req, res, next)=>{
    let id=req.params.id;

    Contact.remove({_id: id}, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the contact list
            res.redirect('/businessContact');
        }
    });
}