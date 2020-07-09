const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listSchema = new Schema({
    title : {
        type : String, 
        required : true
    },
    project : {
        type: Schema.Types.ObjectId,
        ref : 'Project',
        required : true
    }
    
})

const List = mongoose.model('List', listSchema)

module.exports = List
