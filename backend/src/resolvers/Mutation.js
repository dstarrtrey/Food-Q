<<<<<<< HEAD
const Mutation = {
  async createUser(parent, args, ctx, info) {
<<<<<<< HEAD
    // Check if logged in
=======
    // TO DO Check if logged in
>>>>>>> 84c1b23b3062164c8de70c984aff9d05ba8581f9
=======
const bcrypt = require('bcryptjs');
const { PUBSUB_NEW_WAITLIST_ITEM } = require('../shared/constants');
>>>>>>> 254624432e4498e40922c1a604fe2b423da30458

const Mutation = {
  async createMenuItem(parent, args, ctx, info) {
    const newMenuItem = await ctx.db.mutation.createMenuItem({
      data: {
        ...args,
      },
    }, info);
    return newMenuItem;
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
  async createMenuItem(parent, args, ctx, info) {
    const newMenuItem = await ctx.db.mutation.createMenuItem({
=======

  async createWaitlistItem(parent, args, { db, pubsub }, info) {
    const newWaitlistItem = await db.mutation.createWaitlistItem({
>>>>>>> 254624432e4498e40922c1a604fe2b423da30458
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
>>>>>>> 84c1b23b3062164c8de70c984aff9d05ba8581f9
};

module.exports = Mutation;
