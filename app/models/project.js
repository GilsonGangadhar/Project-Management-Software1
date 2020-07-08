const mongoose = require('mongoose')
const Schema = mongoose.Schema

//title, dueDate, description

const projectSchema = new Schema({
    title : {
        type : String, 
        required : true
    },
    //custom validation
    dueDate : {
        type : Date, 
        validate : {
            validator : function(value){
                return value >= new Date()
            },
            message : function(value){
                return 'Due Date cannot be less than today'
            }
        }
    },
    description : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project