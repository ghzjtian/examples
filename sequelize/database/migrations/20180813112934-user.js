'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: {
        type: STRING(30),
        allowNull: false,
        unique: true
      },
      age: {
        type: INTEGER,
        allowNull: false,
      },
      created_at: DATE,
      updated_at: DATE,
    }
    // , {
    //   "uniqueKeys": { "name_age_unique": { "fields": ["name", "age"], customIndex: true } }
    // }
    ,{
      // [Are UNIQUE indices case sensitive in MySQL?](https://stackoverflow.com/a/463784/13481610)
      // Set to 'case sensitive'
      collate: 'utf8_bin' // collation, MYSQL only, 
    }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
