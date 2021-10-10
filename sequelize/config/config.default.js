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

  // config.onerror = {
  //   // all(err, ctx) {
  //   //   // 在此处定义针对所有响应类型的错误处理方法
  //   //   // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
  //   //   ctx.body = 'error';
  //   //   ctx.status = 500;
  //   // },
  //   // Header: Accept -> text/html
  //   // html(err, ctx) {
  //   //   // html hander
  //   //   ctx.body = `<h3>${err.message}</h3>`;
  //   //   ctx.status = 500;
  //   // },
  //   // Header: Accept -> application/json
  //   json(err, ctx) {
  //     // json hander
  //     if (IsJsonString(err?.message)) {
  //       ctx.body = JSON.parse(err?.message);
  //     } else {
  //       // Default error response.
  //       ctx.body = { code: 1001, message: err?.message };
  //     }
  //     ctx.status = 500;
  //   },
  //   // jsonp(err, ctx) {
  //   //   // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
  //   // },
  // };

  return config;
};

function IsJsonString(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}