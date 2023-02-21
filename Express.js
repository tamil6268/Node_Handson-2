const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("Home-Page");
    res.end();
})
app.get("/Menu",(req,res)=>{
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
app.post("/submit",(req,res)=>{
    res.send("Post Worked")
    res.end();
})
app.listen(8090,()=>{
    console.log("Server Created 8090")
})