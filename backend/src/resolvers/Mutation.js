const Mutation = {
  async createUser(parent, args, ctx, info) {
    // Check if logged in

    const newUser = await ctx.db.mutation.createUser({
      data: {
        ...args,
      },
    }, info);

    return newUser;
  },
};

module.exports = Mutation;
