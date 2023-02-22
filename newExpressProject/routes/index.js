var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/",(req,res)=>{
  res.send(`
  <h1>EXPRESS-SERVER</h1>
  <h3>Home-Page</h3>
  <div>Try this by yourself ..... </div>
  <div>Using ('/menu') - you can get Express definition </div>`);
  res.end();
})
/* GET Menu page. */
router.get("/Menu",(req,res)=>{
  res.send(`
  <h2>Express :</h2>
  <ol>
      <li>Express is basically a frame work for node Js.</li>
      <li>It will get access from claint and give response to claint side.</li>
      <li>It is an third party library we want to install it.</li>
      <li>which handles all kind of requests(GET,POST,PUT,DEL)</li>   
  </ol>
  `);
  res.end();
})
/* POST Submit page. */
router.post("/submit",(req,res)=>{
  res.send("Post Worked")
  res.end();
})

module.exports = router;
