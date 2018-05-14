const jwt = require('jsonwebtoken');
const errors = require('./errors/errors');

const utils = {
  getUserId(ctx) {
    const Authorization = ctx.request.get('Authorization');
    if (Authorization) {
      const token = Authorization.replace('Bearer ', '');
      const { userId } = jwt.verify(token, process.env.APP_SECRET);
      return userId;
    }

    throw new errors.NotAuthorizedError();
  },
};

module.exports = { utils };
