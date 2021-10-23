let express = require('express');
let router = express.Router();

let indexController=require('../controllers/index');

/* GET  pages */
router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);
router.get('/about', indexController.displayAboutPage);
router.get('/projects', indexController.displayProjectsPage);
router.get('/services', indexController.displayServicesPage);
router.get('/contact', indexController.displayContactPage);

/*GET and POST route for displaying and processing the login and register page*/ 
router.get('/login', indexController.displayLoginPage);
router.post('/login', indexController.processLoginPage);

//router.get('/register', indexController.displayRegisterPage);
//router.post('/register', indexController.processRegisterPage)


/*GET to perform logout */
router.get('/logout', indexController.performLogout);
module.exports = router;
