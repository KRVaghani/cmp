const express = require('express')
const app = express()
const path = require('path')

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/questions',(req,res)=>{

    let questions = [
        {title: "what is node.js ?", user: "kaushik", votes:"10"},
        {title: "what is react.js ?", user: "rutvik", votes:"5"},
        {title: "what is next.js ?", user: "trupti", votes:"5"},
        {title: "what is angular.js ?", user: "annu", votes:"7"},
        {title: "how can i learn node.js ?", user: "annu", votes:"2"}
    ]

    res.render('index',{questions: questions});
})

app.listen(3000,()=>{
    console.log('server started at port 3000.');
})