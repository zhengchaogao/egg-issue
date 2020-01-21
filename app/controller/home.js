'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    /**
     * 1. 直接使用初始化的ctx.userInfo
     */
    ctx.userInfo.name = ctx.params.name;

    // 基本属性赋值对比
    ctx.nameType = `${ctx.params.name}Type`;

    await delay(10);

    ctx.body = {
      name: ctx.userInfo.name,
      nameType: ctx.nameType,
    };

    /**
     * 2. 第一次请求赋值ctx.userInfo，测试后续能否拿到
     */
    if (ctx.params.name === 'abc1') {
      ctx.userInfo.name = ctx.params.name;
    }

    // 基本属性赋值对比
    ctx.nameType = `${ctx.params.name}Type`;

    await delay(10);
    ctx.body = {
      name: ctx.userInfo.name,
      nameType: ctx.nameType,
    };

    /**
     * 3. 第一次请求赋值nameType，测试后续能否拿到
     */
    // ctx.userInfo.name = ctx.params.name;

    // if (ctx.params.name === 'abc1') {
    //   // 基本属性赋值对比
    //   ctx.nameType = `${ctx.params.name}Type`;
    // }

    // await delay(10);
    // ctx.body = {
    //   name: ctx.userInfo.name,
    //   nameType: ctx.nameType,
    // };

    /**
     * 4. 强行覆盖初始化的ctx.userInfo，正常
     */
    // ctx.userInfo = {
    //   name: ctx.params.name,
    // };

    // // 基本属性赋值对比
    // ctx.nameType = `${ctx.params.name}Type`;

    // await delay(10);
    // ctx.body = {
    //   name: ctx.userInfo.name,
    //   nameType: ctx.nameType,
    // };
  }
}
function delay(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

module.exports = HomeController;
