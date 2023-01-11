
const express = require("express");
const PlaylistRouter = require("./routes/Playlist.js")
const app = express();
//require("./models/connection.js");

app.use((req,res, next) => {
    if(req.method === "POST" || req.method === "PUT"){
        if (!req.headers["content-type"]?.startsWith("application/json")){
            res.sendStatus(400);
            return;
        }     
    }
    next();
});

app.use(express.json());

app.get("/hello", (request, reponse) => {
    reponse.json({msg: "kk", method: "get"});
});

app.post("/hello", (request, reponse) => {
    reponse.json({
        msg: "kk", method: "post"});
});

app.put("/hello/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        msg: "kk" + id, 
        method: "put", 
        dest:id,});

});

app.delete("/hello/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.json({
        msg: "kk" + id, 
        method: "delete",
        dest:id,});
});

app.use(PlaylistRouter);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log("Le serveur écoute sur le port 3000"));
