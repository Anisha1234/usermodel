var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  console.log(req.session.user);
if(req.session.user){
	res.send("Hello  " + req.session.user.username);
}
else{res.send("you are not logged in!")};

});
/*router.get('/', function(req,res){
	res.render("login", {title: "login"});
		console.log ('username = ' + req.query.username ) ;
	  	console.log ('password = ' + req.query.password ) ;
});
router.post('/',function(req, res){
	console.log ('username = ' + req.body.username ) ;
  console.log ('password = ' + req.body.password ) ;
  
  res.send("you are still not logged in  !!!");
});*/




module.exports = router;
