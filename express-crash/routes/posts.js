import express from 'express';
const router = express.Router();

let posts=[
    {id: 1, tittle: 'post One'},
    {id: 2, tittle: 'post Two'},
    {id: 3, tittle: 'post Three'},
];

//get all posts
router.get('/',(req,res)=>{
    console.log(req.query);
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit)&&limit>0){
        return res.status(200).json(posts.slice(0,limit))
    }
    res.status(200).json(posts);
    
});

//get single posts
router.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((post)=>post.id === id);

    if(!post){
        return res.status(404).json({msg:`A post with the id of ${id} was not found`});
    }
    
    res.status(200).json(post);
    
});

//create new post 
router.post('/', (req,res)=>{
    console.log(req.body);
    const newPost={
        id: posts.length +1,
        title: req.body.title
    };

    if(!newPost.title){
        return res.status(400).json({msg:`Please include a Title`});
    }
    posts.push(newPost);
    res.status(201).json(posts);
});

export default router;