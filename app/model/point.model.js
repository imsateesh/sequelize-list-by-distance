'use strict';
module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define('Point', {
    name: Sequelize.STRING,
    geo: Sequelize.GEOMETRY('POINT')
  },
    { underscored: true }
  );

  return Location;
};