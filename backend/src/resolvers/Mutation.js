const Mutation = {
  async createUser(parent, args, ctx, info) {
<<<<<<< HEAD
    // Check if logged in
=======
    // TO DO Check if logged in
>>>>>>> 84c1b23b3062164c8de70c984aff9d05ba8581f9

    const newUser = await ctx.db.mutation.createUser({
      data: {
        ...args,
      },
    }, info);

    return newUser;
  },
<<<<<<< HEAD
=======
  async createMenuItem(parent, args, ctx, info) {
    const newMenuItem = await ctx.db.mutation.createMenuItem({
      data: {
        ...args,
      },
    }, info);

    return newMenuItem;
  },
  async createWaitlistItem(parent, args, ctx, info) {
    const newWaitlistItem = await ctx.db.mutation.createWaitlistItem({
      data: {
        ...args,
      },
    }, info);

    return newWaitlistItem;
  },
>>>>>>> 84c1b23b3062164c8de70c984aff9d05ba8581f9
};

module.exports = Mutation;
