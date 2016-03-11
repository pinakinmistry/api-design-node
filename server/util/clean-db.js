var User = require('../api/user/userModel');
var Post = require('../api/post/postModel');
var Category = require('../api/category/categoryModel');
var _ = require('lodash');
var logger = require('./logger');

logger.log('Cleaning the Database');

var cleanDB = function() {
  logger.log('... cleaning the DB');
  var cleanPromises = [User, Category, Post]
    .map(function(model) {
      return model.remove().exec();
    });
  return Promise.all(cleanPromises)
    .then(function() {
      return 'Databases cleaned';
    });
}

cleanDB()
  .then(logger.log.bind(logger))
  .catch(logger.log.bind(logger));
