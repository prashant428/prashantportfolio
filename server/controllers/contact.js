let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');

let jwt=require('jsonwebtoken')

//crate a reference to the model
let Contact=require('../models/contact');

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
            //refresh the book list
            res.redirect('/businessContact');
        }
    });
}

module.exports.performDelete=(req, res, next)=>{
    let id=req.params.id;

    Contact.remove({_id: id}, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the book list
            res.redirect('/businessContact');
        }
    });
}