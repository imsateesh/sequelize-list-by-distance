'use strict';
const Sequelize = require('sequelize');
const models = require('../model');
const Point = models.point;

const { handleError } = require('../utils/service');

exports.create = (req, res) => {
  Point.create({
    name: req.body.name,
    geo: { type: 'Point', coordinates: [req.body.lat, req.body.lng] }
  });

};

exports.findAll = (req, res) => {
  const location = Sequelize.literal(`ST_GeomFromText('POINT(${77.320000} ${24.650000})', 4326)`);

  Point.findAll({
    attributes: ['name', 'geo', [Sequelize.fn('ST_Distance_Sphere', Sequelize.literal('geo'), location), 'distance']],
    order: [Sequelize.literal('distance DESC')], // https://github.com/sequelize/sequelize/issues/9679
    limit: 10,
    logging: console.log
  })
    .then(function (instance) {
      res.send(instance);
      console.log(instance);
    })
    .catch(err => {
      handleError(err, req, res);
    })

};

