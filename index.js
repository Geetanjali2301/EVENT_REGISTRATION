const express=require("express")
const mysql=require("mysql2")
const path=require("path")
const bodyParser=require("body-parser");

const app=express()

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))
app.use(bodyParser.urlencoded({extended:true}));
const port=3000;

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"Event",
    password:"Geetu@2301"
});

app.get("/",(req,res)=>
{
    res.render("home.ejs")
})

app.post("/submit",(req,res)=>{
    let name=req.body.n;
    let id=req.body.i;
    let department=req.body.d;
    let event=req.body.e;
    let contact=req.body.c;

    let q=`insert into event_details (name,id,department,event,contact) values ("${name}","${id}","${department}","${event}","${contact}");`
    con.query(q,(err,result)=>
    {
        if(err) throw err;
        console.log(result);
        res.render("success.ejs");
    })


})

app.listen(port,(req,res)=>
{
    console.log(`Server started on ${port}`); 
})

