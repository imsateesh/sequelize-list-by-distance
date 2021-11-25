var router = require("express").Router();
const points = require('../controller/point.controller');

module.exports = app => {
  router.post('/', points.create);
  router.get('/', points.findAll);

  app.use('/point', router);
};