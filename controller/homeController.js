const Transaction  = require('./../schema/Transaction');

exports.collect = (req,res)=>{
    Transaction.find()
    .then((result)=>{
        res.status(200).json({
            status:'Success',
            message:'Gathering Info Successfully',
            data:result
        })
    })
    .catch((err)=>{
        res.status(400).json({
            status:'Fail',
            message:'Gathering Info Failed',
            Error:err
        })
    })
}

exports.Add = (req,res) =>{
    const {title,amount} = req.query;
    Transaction.create(req.body)
    .then((result)=>{
        res.status(200).json({
            status:'Success',
            message:'Data Added',
            data:result
        })
    })
    .catch((err)=>{
        res.status(400).json({
            status:'Fail',
            message:'Data Added Failed',
            Error:err
        })
    })
}

exports.del = (req,res) =>{
    console.log(req.params);
    Transaction.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(200).json({
            status:'Success',
            message:'Data deleted Successfully',
        })
    })
    .catch((err)=>{
        res.status(400).json({
            status:'Fail',
            message:'Data deletion UnSuccessfull',
            Error:err
        })
    })
}