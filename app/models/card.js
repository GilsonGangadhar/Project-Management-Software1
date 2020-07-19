//only to be used in listSchema in the cards field. if only required

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
    cards : [
        {
            title : {
                type : String, 
                required : true
            },
            id : {
                type : Schema.Types.ObjectId,
            },
            task : {
                type : Schema.Types.ObjectId,
                ref : 'Task',
                required : true
            }
        }
    ]
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card