const express= require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require('./models/listing.js');
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"; // Add the missing colon here
main().then(()=>{
console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req,res)=>{
    res.send("Hi, I am Root");
});
app.get("/testListing",async(req,res) =>{
    let sampleListing = new Listing({
        title:"My New Villa",
        description :"By the beach",
        price: 5000,
        location: "sindhuli",
        country: "Nepal",
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("sucessful testing");
});


app.listen(3030,()=>{
    console.log('server is listening to port 3030');
});