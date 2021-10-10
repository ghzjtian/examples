'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/users/name', controller.user.findOrCreateByName);
  app.resources('users', '/users', app.controller.user);
  
  app.resources('posts', '/posts', app.controller.post);
};
