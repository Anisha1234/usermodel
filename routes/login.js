var express = require('express');
var router = express.Router();

//db connection part  // npm install --save monk 
const db = require('monk')('localhost/myDb')
const Users = db.get('Users')      //

/* GET home page. */

router.get('/', function(req,res){
	res.render("login", {title: "login"});
});

router.post('/',function(req, res){
	console.log ('username = ' + req.body.username ) ;
  console.log ('password = ' + req.body.password ) ;
  
  Users.findOne ({name:req.body.username}).then(function(user){
  	if(!user || Object.keys(user).length === 0) res.send("you entered a wrong username !");  // couldn't find this user in db
    else if (user.password == req.body.password) {
    	// login user 
      req.session.user ={};
      req.session.user.username = user.name ;
      res.send("congrats, you are now logged in");
      
    } else res.send("you entered a wrong password !");
  })
  
});

module.exports = router;