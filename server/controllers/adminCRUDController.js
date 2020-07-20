const mongoose = require("mongoose");
const User = require("../models/usersmodel");
const register = require('../services/registerService');

module.exports.createUser = (req, res, next) => {
  register(req, res, next);
};