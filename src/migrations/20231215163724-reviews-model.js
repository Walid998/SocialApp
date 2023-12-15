'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 5
        }
      },
      storyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'stories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('reviews');
  },
};
