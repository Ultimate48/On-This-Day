'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    month: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    wiki_links: DataTypes.ARRAY(DataTypes.STRING),
    image_key: DataTypes.STRING,
    importance_score: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};