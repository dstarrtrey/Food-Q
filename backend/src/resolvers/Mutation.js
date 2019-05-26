const bcrypt = require('bcryptjs');
const { PUBSUB_NEW_WAITLIST_ITEM } = require('../shared/constants');

const Mutation = {
  async createMenuItem(parent, args, ctx, info) {
    const newMenuItem = await ctx.db.mutation.createMenuItem({
      data: {
        ...args,
      },
    }, info);
    return newMenuItem;
  },

  async createWaitlistItem(parent, args, { db, pubsub }, info) {
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

  async removeWaitlistItem(parent, args, { db, pubsub }, info) {
    const deletedItem = await db.mutation.deleteWaitlistItem({
      where: {
        ...args,
      },
    }, info);
    pubsub.publish(PUBSUB_NEW_WAITLIST_ITEM, {
      deletedItem,
    });
    return deletedItem;
  },

  async createUser(parent, { username, password }, { db }, info) {
    const userExists = await db.exists.User({
      username,
    });
    if (userExists) {
      throw new Error('Another user with same username exists.');
    } else {
      const newUser = await db.mutation.createUser({
        data: {
          username,
          password: await bcrypt.hashSync(password, 10),
        },
      }, info);
      return newUser;
    }
  },
  async login(parent, { username, password }, { request, db }) {
    const user = await db.query.user({
      where: {
        username,
      },
    });
    if (user) {
      if (await bcrypt.compareSync(password, user.password)) {
        request.session.user = {
          ...user,
        };
        return true;
      }
      throw new Error('Incorrect password.');
    }
    throw new Error('No Such User exists.');
  },
};

module.exports = Mutation;
