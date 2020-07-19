const List = require('../models/list')

const listsController = {}

listsController.list = (req, res) => {
    List.find({user : req.user._id})
    .then((lists) => {
        res.json(lists)
    })
    .catch((err) => {
        res.json(err)
    })
}

listsController.create = (req, res) => {
    const body = req.body
    const list = new List(body)
    list.user = req.user._id
    list.save()
    .then((list) => {
        res.json(list)
    })
    .catch((err) => {
        res.json(err)
    })
}

listsController.show = (req, res) => {
    const id = req.params.id
    List.findOne({_id : id, user : req.user._id})
        .then((list) => {
            if(list){
                res.json(list)
            }else{
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

listsController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    List.findOneAndUpdate({_id : id, user : req.user._id,}, body, {new : true, runValidators : true})

        .then((list) => {
            res.json(list)
        })
        .catch((err) => {
            res.json(err)
        })
}

listsController.destroy = (req, res) => {
    const id = req.params.id
    List.findOneAndDelete({_id : id, user : req.user._id})
        .then((list) => {
            res.json(list)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = listsController