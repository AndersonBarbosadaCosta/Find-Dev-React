const mongoose = require('mongoose')

const PointSchema = new mongoose.Schema({
type:{
    type:String,
    enum:['Point'],
    reuired:true
},
coordinates: {
    type:[Number],
    reuired:true
}
})

module.exports = PointSchema