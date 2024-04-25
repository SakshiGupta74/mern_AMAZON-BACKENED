const usersModel = require('../models/usersModel');
const getuser = async (req,res) =>{
    const data = await usersModel.find();
    // console.log(data);
    console.log(req.url);
    res.send({
        status: 'success',
        results: 0,
        data: {
            products: data,
        }
    })
}

const postuser = async(req,res) =>{
    try {
        const data = await usersModel.create(req.body);
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

const putuser = (req,res) =>{
    res.status(501);
    res.json({
        status:'fail',
        message:'route is not yet implemented',
    })
}

const deleteuser = (req,res) =>{
    res.status(501);
    res.json({
        status:'fail',
        message:'route is not yet implemented',
    })
}

module.exports = {
     getuser,
     postuser,
     putuser,
     deleteuser,
}