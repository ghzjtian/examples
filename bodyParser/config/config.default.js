'use strict';

// exports.keys = '123456';

// exports.bodyParser = {
//   enableTypes: ['json', 'form', 'text'],
//   extendTypes: {
//     json: 'application/custom-json',
//     text: ['application/xml'],
//   },
// };

module.exports = {
  keys: '123456',
  bodyParser: {
    enableTypes: ['json', 'form', 'text'],
    extendTypes: {
      json: 'application/custom-json',
      text: ['application/xml'],
    },
  },
  // 关闭 csrf 校验.
  security: {
    csrf: {
      enable: false,
    },
  },
};
