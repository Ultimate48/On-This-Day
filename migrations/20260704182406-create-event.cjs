'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      month: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      day: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      wiki_links: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      image_key: {
        type: Sequelize.STRING,
        allowNull: false
      },
      importance_score: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addIndex('Events', ['month', 'day']);
    await queryInterface.addIndex('Events', ['year']);
    await queryInterface.addIndex('Events', ['category']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};