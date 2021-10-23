/*
Filename: users.js
Student Name: Prashant Sharma
Student ID: 301175737
Date: Oct 23, 2021
*/

//require modules for the User model

let mongoose=require('mongoose');
let passportLocalMongoose=require('passport-local-mongoose');

let User=mongoose.Schema(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required : "username is required"
        },
        //for password, same as username
        email:
        {
            type: String,
            default: '',
            trim: true,
            required: "email is required"
        },
        displayName: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required'
        },
        created:
        {
            type : Date,
            default: Date.now
        },
        updated:
        {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "users"
    }
);

//configure options for user model

let options=({ missingPasswordError :"Wrong/Missing password"});

User.plugin(passportLocalMongoose, options);
module.exports.User=mongoose.model("User", User);