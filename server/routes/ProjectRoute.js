const express = require('express')
const ProjectR = express.Router()
const {Authenticate,createProject,AllProjects,deleteproject,uploadphoto} = require('../controllers/Project-controller')
const upload = require('../utils/multer')

ProjectR.route('/auth').get(Authenticate)
ProjectR.route('/addProject').post(createProject)
ProjectR.route('/allprojects').get(AllProjects)
ProjectR.route('/delete/:id').delete(deleteproject)
ProjectR.route('/upload').post(upload,uploadphoto)
module.exports = ProjectR