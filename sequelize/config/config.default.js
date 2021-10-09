'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_sequelize-example';

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg-sequelize-example-dev',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'mysql1230',
  };

  // 开发过程中，关闭 csrf 保护
  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
