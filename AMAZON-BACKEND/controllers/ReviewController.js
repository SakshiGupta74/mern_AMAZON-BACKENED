const ReviewModel = require('../models/ReviewModel.js');
const getReview = async (req,res) =>{
    const reqId = req.params.id;
    const data = { ...req.body, _id: reqId };
    const results = await ReviewModel.find({ _id: reqId }, data);
    // console.log(data);
    console.log(req.url);
    res.send({
        status: 'success',
        results: 0,
        data: {
            products: results,
        }
    })
}

const postReview = async(req,res) =>{
    try {
        const data = await ReviewModel.create(req.body);
        console.log(data);
        console.log(req.body);
        res.json({
            status: 'success',
            results: 1,
            data: {
                products: data,
            }
        })
    }

    catch (err) {
        res.status(403);
        console.log(err);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),

        })
    }
} 

const putReview = (req,res) =>{
    res.status(501);
    res.json({
        status:'fail',
        message:'route is not yet implemented',
    })
}

const deleteReview = (req,res) =>{
    res.status(501);
    res.json({
        status:'fail',
        message:'route is not yet implemented',
    })
}

module.exports = {
     getReview,
     postReview,
     putReview,
     deleteReview,
}