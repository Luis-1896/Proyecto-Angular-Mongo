'use strict'

let express = require('express');
let ProjectController = require('../constrollers/project');

let router = express.Router(); //va contener todas las rutas por el Router()

/**
 * middleware es una acción que se ejecutara antes del resto de todas las funciones
 */
let multipart = require('connect-multiparty');
let multipartMiddleware = multipart({ uploadDir: './uploads' });

router.get('/home', ProjectController.homre);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile);

module.exports = router;