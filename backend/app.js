const express = require("express");

const checkRoutes = require("./routes/check");

const bodyParser = require("body-parser");

const app = express();
  
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods" , "GET,POST,PUT,DELETE,OPTIONS")
    res.header("Access-Control-Allow-Headers","Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
    });

app.get("/", (req, res) => {
 res.send("from node");
});



app.use('/check',checkRoutes);
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));