const express = require('express');
const app = express();
const ejs = require('ejs');
const favicon = require('serve-favicon');

app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
app.set('view engine', 'ejs');

app.get("/home", (req,res) => {
  res.send("Hello World")
})

app.get('/cam', (req,res) =>{
  res.render("test2")
})

app.listen(3000, () => {
  console.log('server started on port 3000...');
});
