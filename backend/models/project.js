'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Modelo (contendra todo las keys de la BD creada en MongoDB en la colección projects)
let ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});
//el primer pararemos es la identidad a guardar, lo que hace mongoose pasa todo a minusculas y lo transforma a minusculas y lo pluraliza, ej Project 
//seguardaria como projects, si no existe esa colección en mongodb se guarda y si ya existe se sobreescribe
module.exports = mongoose.model('Project', ProjectSchema);