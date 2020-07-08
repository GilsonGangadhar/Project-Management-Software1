const Project = require('../models/project')

const projectsController = {}

projectsController.list = (req, res) => {
    Project.find({user : req.user._id})
    .then((projects) => {
        res.json(projects)
    })
    .catch((err) => {
        res.json(err)
    })
}

projectsController.create = (req, res) => {
    const body = req.body
    const project = new Project(body)
    project.user = req.user._id
    project.save()
        .then((project) => {
            res.json(project)
        })
        .catch((err) => {
            res.json(err)
        })
}

projectsController.show = (req, res) => {
    const id = req.params.id
    Project.findOne({_id : id, user : req.user._id})
        .then((project) => {
            if(project){
                res.json(project)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

projectsController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Project.findOneAndUpdate({_id : id, user : req.user._id}, body, {new : true, runValidators : true})

        .then((project) => {
            res.json(project)
        })
        .catch((err) => {
            res.json(err)
        })
}

projectsController.destroy = (req, res) => {
    const id = req.params.id
    Project.findOneAndDelete({ _id : id, user : req.user._id})
        .then((project) => {
            res.json(project)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = projectsController

