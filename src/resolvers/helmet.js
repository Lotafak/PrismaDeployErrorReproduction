const errors = require('./../errors/errors');

// Helmet to handle uncontrolled errors
const helmet = resolver => async (...args) => {
  try {
    return await resolver(...args);
  } catch (err) {
    if (err.path) {
      throw new errors.FatalError({ data: { reason: err.message } });
    } else if (err[0] && err[0].message && err[0].message.includes('Cannot query')) {
      throw new errors.FatalError({ data: { reason: err[0].message } });
    } else {
      throw err;
    }
  }
};

// Surround functions with helmet
const helmetize = (args) => {
  const functions = args;
  const keys = Object.keys(functions);

  for (let i = 0; i < keys.length; i += 1) {
    functions[keys[i]] = helmet(functions[keys[i]]);
  }

  return functions;
};

module.exports = { helmet, helmetize };
