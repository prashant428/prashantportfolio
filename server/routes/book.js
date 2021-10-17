let express= require('express');
let router=express.Router();
let mongoose=require('mongoose');
let passport=require('passport');

let bookController=require("../controllers/book")

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

router.get('/', bookController.displayBookList);

//GET route for displaying the Add page --CREATE Operation

router.get('/add', requireAuth, bookController.displayAddPage);

//POST route for processing the Add page --CREATE Operation
router.post('/add', requireAuth, bookController.processAddPage);

//GET route for displaying the Edit page --UPDATE Operation
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

//POST route for processing the Edit page --UPDATE Operation
router.post('/edit/:id', requireAuth, bookController.processEditPage);

//GET route to perform Deletion  --DELETE Operation
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports=router;