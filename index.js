const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');

app.get('/', function(req, res){    
    res.render('index');
});

console.log(`Server is listening on port ${port}`);
app.listen(port);