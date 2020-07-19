const mongoose = require('mongoose')
const Schema = mongoose.Schema

// title, description, members, dueDate, labels 

const taskSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    members : {
        type : Array,
        required : true
    },
    dueDate : {
        type : Date, 
        //custom validation
        validate : {
            validator : function(value){
                return value >= new Date()
            },
            message : function(value){
                return 'Due Date should not be less than today'
            }
        }
    },
    labels : {
        type : String, 
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    user : {
        type : Schema.Types.ObjectId, 
        ref : 'User',
        requied : true
    }
    // project : {
    //     type : Schema.Types.ObjectId,
    //     ref : 'Project', 
    //     required : true
    // },
    
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task