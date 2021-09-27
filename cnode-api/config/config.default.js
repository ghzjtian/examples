'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1490750627161_5967';

  config.middleware = [ 'errorHandler' ];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
