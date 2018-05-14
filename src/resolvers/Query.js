const { utils } = require('../utils');

const Query = {
  loggedInUser(parent, args, ctx) {
    return ctx.db.query.user({ where: { id: utils.getUserId(ctx) } });
  },
};

module.exports = { Query };
