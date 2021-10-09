'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // Get list
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };

    const result = await ctx.service.user.list(query);
    ctx.body = result;
  }

  // Get one
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.find(ctx.helper.parseInt(ctx.params.id));
  }

  // Create one, post method
  async create() {
    const ctx = this.ctx;
    try {
      const user = await ctx.service.user.create(ctx.request.body);
      ctx.status = 201;
      ctx.body = user;

    } catch (err) {
      if (err.name == 'SequelizeDatabaseError') {
        const errorDetail = { code: 1002, message: err?.message };
        throw new Error(JSON.stringify(errorDetail));
      } else {
        throw err;
      }
    }
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.user.del(id);
    ctx.status = 200;
  }
}

module.exports = UserController;
