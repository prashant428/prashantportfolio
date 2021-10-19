let express= require('express');
let router=express.Router();
let mongoose=require('mongoose');
let passport=require('passport');
let jwt=require('jsonwebtoken');

let contactController=require("../controllers/contact")

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//GET Route for the Book List page - READ operation

router.get('/', requireAuth, contactController.displayContactList);


//GET route for displaying the Update page --UPDATE Operation
router.get('/update/:id', requireAuth, contactController.displayUpdatePage);

//POST route for processing the Update page --UPDATE Operation
router.post('/update/:id', requireAuth, contactController.processUpdatePage);

//GET route to perform Deletion  --DELETE Operation
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports=router;