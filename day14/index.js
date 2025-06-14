const express = require("express");
const app = express();
const port = 6060;
app.use(express.urlencoded({ extended: true }));

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "apana College",
        content: "i love coding",
    },
    {
        username: " Nisha rai",
        content: " hello beautiful people",
    }, {
        username: " saraj",
        content: "i love game",
    },


];






app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});



app.post("/posts",(req, res)=>{
   let {username ,content}= req.body;
   posts.push({username,content});
   res.redirect("/posts");
});

app.listen(port, () => {
    console.log("listening  to port :6060");
});