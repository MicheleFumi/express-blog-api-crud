const post= require('../db/db.js')
const fs = require ('fs')

// add index function for get all post
function index(req, res) {
    res.json({
        data : post,
        count : post.length
    })

    
}
// add show function for get single post
const show = (req,res)=>{
    const slug = req.params.slug
    const posts = post.find(post => post.slug === slug)

    console.log(slug);
    if (!post) {
        return res.status(404).json({
            error:`404! Pizza Not Found!`
        })
    }
    return res.status(200).json({
     
        data:posts
    })
}

// add store function for create new post
const store = (req, res)=>{
    const newPost = {

        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags:req.body.tags
    }
    post.push(newPost)
    fs.writeFileSync('./db/db.js', `module.exports = ${JSON.stringify(post, null, 4)}`)

    return res.status(201).json({
        status:201,
        data:post,
        count:post.length
    })

    
}
// add update function for update post
const update = (req, res)=>{
    const slug = req.body.slug
    const singlePost=post.find(post =>post.slug === slug)
    console.log(slug);

    if (!singlePost) {
        return res.status(404).json({
            error:`Error!: ${slug} was not found `
        })
    }
        singlePost.title = req.body.title,
        singlePost.slug = req.body.slug,
        singlePost.content= req.body.content,
        singlePost.image = req.body.image,
        singlePost.tags = req.body.tags
    
    

        
        fs.writeFileSync('./db/db.js', `module.exports = ${JSON.stringify(post, null, 4)}`)
    
         res.send(singlePost)
         return res.json({  
            status: 201,
            data: post,
            count: post.length
         })
} 
// add delete function for delete post

const destroy = (req, res)=>{

    const singlePost=post.find(post =>post.slug === req.params.slug)
    if (!singlePost) {
        return res.status(404).json({
            error:`Error!: pizza was not found `
        })
    }

     
    const newPost = post.filter(singlePost => singlePost.slug !== req.params.slug)
    fs.writeFileSync('./db/db.js', `module.exports = ${JSON.stringify(post, null, 4)}`)
    return res.json({
        status: 200,
        data: newPost,
        count: newPost.length
    })

}




// add 
module.exports = {
    index,
    show,
    store,
    update,
    destroy
    
}