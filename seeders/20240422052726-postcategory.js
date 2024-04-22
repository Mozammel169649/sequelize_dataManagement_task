'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('postCategories', [{
      postId: 3,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
    },
  async down (queryInterface, Sequelize) {
  
  }
};
