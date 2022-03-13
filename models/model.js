const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    prodname: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    manufacture: {
        required: true,
        type: String
    },
    expiry:{
        type:String
    }
    

})
const reviewSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    review:{
        required:true,
        type:String
    }
    

})

module.exports = mongoose.model('Data', dataSchema);
module.exports=mongoose.model('reviewData',reviewSchema);