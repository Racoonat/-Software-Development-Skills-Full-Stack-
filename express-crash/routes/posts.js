import express from 'express';
const router = express.Router();

let posts=[
    {id: 1, title: 'post One'},
    {id: 2, title: 'post Two'},
    {id: 3, title: 'post Three'},
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
router.get('/:id',(req,res,next)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((post)=>post.id === id);

    if(!post){
        //return res.status(404).json({msg:`A post with the id of ${id} was not found`});
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status=404;
        return next(error);
    }
    
    res.status(200).json(post);
    
});




//create new post 
router.post('/', (req,res,next)=>{
    console.log(req.body);
    const newPost={
        id: posts.length +1,
        title: req.body.title
    };

    if(!newPost.title){
        const error = new Error(`Please include a Title`);
        error.status=400;
        return next(error);
    }
    posts.push(newPost);2
    res.status(201).json(posts);
});

//update post
router.put('/:id',(req,res,next)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((post)=>post.id===id);

    if(!post){
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status=404;
        return next(error);
    }
    post.title = req.body.title;
    res.status(200).json(posts);
});

//DELETE post
router.delete('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((post)=>post.id===id);

    if(!post){
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status=404;
        return next(error);
    }
    posts = posts.filter((post)=> post.id !== id);
    res.status(200).json(posts);
});

export default router;