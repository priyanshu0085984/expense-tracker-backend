const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:[true,'A transaction must have a title']
    },
    Amount:{
        type:Number,
        required:[true,'A transaction must have an amount']
    },
});
const Transaction = mongoose.model('Transaction',TransactionSchema);

module.exports = Transaction;