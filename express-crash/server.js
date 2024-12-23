const express = require ('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express ();


//setup static folder
//app.use(express.static(path.join(__dirname,'public')))

let posts=[
    {id: 1, tittle: 'post One'},
    {id: 2, tittle: 'post Two'},
    {id: 3, tittle: 'post Three'},
];


//get all posts
app.get('/api/posts',(req,res)=>{
    console.log(req.query);
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit)&&limit>0){
        res.json(posts.slice(0,limit))
    }else{
    res.json(posts);
    }
});

//get single posts
app.get('/api/posts/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    res.json(posts.filter((post)=>post.id === id));
});


app.listen(port,()=> console.log(`Server is running on port ${port}`));
