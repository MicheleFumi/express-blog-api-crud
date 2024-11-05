const post= require('../db/db.js')
const fs = require ('fs')

function index(req, res) {
    res.json({
        data : post,
        count : post.length
    })

    
}



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


const store = (req, res)=>{
    const newPost = {

        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags:req.body.tags
    }
    post.push(newPost)
    
    return res.status(201).json({
        status:201,
        data:post,
        count:post.length
    })

    
}

fs.writeFileSync('./db/db.js', `module.exports = ${JSON.stringify(post, null, 4)}`)


module.exports = {
    index,
    show,
    store
    
}