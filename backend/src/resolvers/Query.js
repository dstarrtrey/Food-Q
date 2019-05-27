const { forwardTo } = require('prisma-binding');

const Query = {
  users: forwardTo('db'),
  menuItems: forwardTo('db'),
  waitlistItems: forwardTo('db'),
  user: forwardTo('db'),
  waitlistItem: forwardTo('db'),
  isLoggedIn: (parent, args, { req }) => typeof req.session.user !== 'undefined',
};

module.exports = Query;
