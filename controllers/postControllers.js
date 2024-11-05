const post= require('../db/db.js')

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




module.exports = {
    index,
    show,
    
    
}