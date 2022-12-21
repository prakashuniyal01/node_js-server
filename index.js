const express = require('express');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routes'));

// se up ejs enjine 
app.set('view enjine','ejs');
app.set('views','./views');
app.listen(port, function(err){
   if(err){
    console.log(`Error is running the server : ${err} `);
 
   }
 console.log(`server is running on port ${port}`);
});