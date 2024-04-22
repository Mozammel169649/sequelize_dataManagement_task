
var db = require("../models");
const post = db.post;
const category = db.category;
var postjob = async (req, res) => {
    const allPostData = await post.findAll({
        include: category,
        //  where: { id: 2 }
    });
    let response = {
        data: "ok",
        postData: allPostData
    }
    res.status(200).json(response)
}
var categoryjob = async (req, res) => {
    const allcategoryData = await category.findAll({
        include: post,
        //  where: { id: 2 }
    }
    );
    let response = {
        data: "ok",
        categoryData: allcategoryData
    }
    res.status(200).json(response)
}
module.exports = {
    postjob,
    categoryjob
}