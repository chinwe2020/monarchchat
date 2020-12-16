const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    
    avatar: [],

    post: []

}, {timestamps: true})

module.exports = mongoose.model('Profile', profileSchema);