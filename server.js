
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public' ,'index.html'));
});

const port = process.env.port || 8080;
app.listen(port,()=>{
    console.log(`listening on port ${port}` );
});
