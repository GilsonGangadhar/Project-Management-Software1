const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const projectsController = require('../app/controllers/projectsController')
const tasksController = require('../app/controllers/tasksController')

router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)

router.get('/projects', authenticateUser, projectsController.list)
router.post('/projects', authenticateUser, projectsController.create)
// router.get('/projects/:id', authenticateUser, projectsController.show)
router.put('/projects/:id', authenticateUser, projectsController.update)
router.delete('/projects/:id', authenticateUser, projectsController.destroy)

// router.get('/task', authenticateUser, tasksController.list)
// router.post('/task',authenticateUser, tasksController.create)
// router.get('/task/:id', authenticateUser, tasksController.show)
// router.put('/task/:id', authenticateUser, tasksController.update)
// router.delete('/task/:id', authenticateUser, tasksController.destroy)



module.exports = router