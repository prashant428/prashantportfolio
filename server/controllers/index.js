/*
Filename: index.js
Student Name: Prashant Sharma
Student ID: 301175737
Date: Oct 23, 2021
*/

let express=require('express');
let router=express.Router();
let mongoose=require("mongoose");
let passport=require("passport");

//enable jwt
let jwt=require('jsonwebtoken');
let DB=require('../config/db')

//Create the User Model instance

let userModel=require("../models/user");
let User=userModel.User; //alias

module.exports.displayHomePage=(req, res, next)=>{
    res.render('index', 
    {title: 'Home',
    displayName: req.user? req.user.displayName: ''});
}

module.exports.displayAboutPage=(req, res, next)=>{
    res.render('about', 
    { title: 'About',
    displayName: req.user? req.user.displayName: ''});
}

module.exports.displayProjectsPage=(req, res, next)=>{
    res.render('projects', 
    { title: 'Projects',
    displayName: req.user? req.user.displayName: ''});
}

module.exports.displayServicesPage=(req, res, next)=>{
    res.render('services', 
    { title: 'Services',
    displayName: req.user? req.user.displayName: ''});
}


module.exports.displayContactPage=(req, res, next)=>{
    res.render('contact', 
  { title: 'Contact',
  displayName: req.user? req.user.displayName: ''});
}

module.exports.displayLoginPage=(req, res, next)=>{
//check if the user is already logged in
    if(!req.user){
        res.render('auth/login',
        {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user? req.user.displayName : ''})
    }
    else{
        return res.redirect('/');
    }
}

module.exports.processLoginPage= (req, res, next)=>{
    passport.authenticate('local', //authenticating the user
        (err, user, info)=>{
        //server err
        if(err)
        {
            return next(err);
        }
        if(!user)
        {
            req.flash("loginMessage", "Authentication error");
            return res.redirect('./login');
        }
        req.login(user, (err)=>{ //logging the user in
            //server error?
            if(err)
            {
                return next(err);
            }

           /* const payload={
                id: user._id,
                displayName:user.displayName,
                username:user.username,
                email: user.email
            }

           const authToken=jwt.sign(payload, DB.Secret, {
                expiresIn: 602800 //1 week
            });
            /* TODO Getting ready for API
            res.json({success:true, msg:"User logged in successfully", user:{
                id:user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email },
                token: authToken});*/

            return res.redirect('/businessContact')
        });
    }) (req, res, next);
}
/*module.exports.displayRegisterPage=(req, res, next)=>{ //Displaying the register page
    //check if the user is not already logged in
    if(!req.user){
        res.render('auth/register', {
            title: 'Register',
            messages: req.flash('registermessage'),
            displayName: req.user? req.user.displayName : ''
        });
    }
    else{
        return res.redirect('/');
    }
}

module.exports.processRegisterPage=(req, res, next)=>{ //Registering the user
    let newUser=new User({
        username:req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });
    User.register(newUser, req.body.password, (err)=>
    {
        if(err){
            console.log("Error: Inserting New User");
            if(err.name=="UserExistsError"){
                req.flash(
                    'registerMessage',
                    'Registration Error: User already exists'
                )
            }
            return res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user? req.user.displayName : ''
            })
        }
        else{
            //if no error exists and registration is successful redirect the user
            //and authenticate them 
          //  res.json({success:true, msg: "User registered successfully!"}); //Getting Ready for API
            return passport.authenticate('local')(req, res, ()=>{
                res.redirect('/businessContact')
            })
        }
    })
}*/

module.exports.performLogout=(req, res, next) => //logging the user out
{
    req.logout();
    res.redirect('/');
}