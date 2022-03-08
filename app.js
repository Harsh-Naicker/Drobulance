const express=require("express")
const bodyParser=require("body-parser")
const ejs=require("ejs");
const https=require("https");
var ThingSpeakClient = require('thingspeakclient');
var client = new ThingSpeakClient();
var pulseData=0;
var tempData=0;
const channelId=1668276;

client.attachChannel(channelId, { readKey:'2188GHAV5MKSE3V9'});
    client.getLastEntryInFieldFeed(channelId, 2,function(err,res)
    {
        
        pulseData=res.field2;
        // console.log("Pulse: "+ pulseData);
    });
    client.getLastEntryInFieldFeed(channelId, 1,function(err,res)
    {
        
        tempData=res.field1;
        // console.log("Temp" +tempData);
    });
    console.log(tempData,pulseData);



const app=express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/", function(req,res)
{
    res.render("index");
})
app.get("/monitor", function(req,res)
{   
    // const url="https://api.thingspeak.com/channels/1668276/fields/2.json?api_key=2188GHAV5MKSE3V9&results=2";
    // https.get(url,function(response)
    // {
    //     response.on("data",function(data)
    //     {
    //         var pulseData=JSON.parse(data);
    //         pulseData = pulseData["feeds"];
    //         console.log(pulseData);
    //     });
    // });
    
    
    res.render("monitor",{temperature: tempData,pulse: pulseData});
})





app.listen(3000)
