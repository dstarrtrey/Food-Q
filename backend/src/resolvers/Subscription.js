const { PUBSUB_NEW_WAITLIST_ITEM } = require('../shared/constants');
// To be used for whenever someone is added or removed from waitlist

const Subscription = {
  newWaitlistItem: {
    subscribe: async (parent, args, ctx) => {
      // I don't know
      return ctx.pubsub.asyncIterator(PUBSUB_NEW_WAITLIST_ITEM);
    },
  },
};

module.exports = Subscription;
