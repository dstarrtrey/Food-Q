const { PUBSUB_NEW_WAITLIST_ITEM } = require('../shared/constants');

const Mutation = {
  async createUser(parent, args, ctx, info) {
    // TO DO Check if logged in

    const newUser = await ctx.db.mutation.createUser({
      data: {
        ...args,
      },
    }, info);

    return newUser;
  },
  async createMenuItem(parent, args, ctx, info) {
    const newMenuItem = await ctx.db.mutation.createMenuItem({
      data: {
        ...args,
      },
    }, info);

    return newMenuItem;
  },
  async createWaitlistItem(parent, args, ctx, info) {
    const { db, pubsub } = ctx;
    const newWaitlistItem = await db.mutation.createWaitlistItem({
      data: {
        ...args,
      },
    }, info);
    pubsub.publish(PUBSUB_NEW_WAITLIST_ITEM, {
      newWaitlistItem,
    });
    return newWaitlistItem;
  },
};

module.exports = Mutation;
