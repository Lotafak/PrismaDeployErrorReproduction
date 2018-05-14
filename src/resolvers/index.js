const { Query } = require('./Query');
const { helmetize } = require('./helmet');

module.exports = {
  Query: helmetize(Query),
};
