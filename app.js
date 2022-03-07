const express=require("express")
const bodyParser=require("body-parser")
const ejs=require("ejs");

const app=express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/", function(req,res)
{
    res.render("index");
})

app.get("/monitor", function(req,res)
{
    
    res.render("monitor");
})




app.listen(3000)
