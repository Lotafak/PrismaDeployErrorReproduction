const { GraphQLServer } = require('graphql-yoga');
const { Graphcool } = require('graphcool-binding');
const resolvers = require('./resolvers');
const apolloErrors = require('apollo-errors');

const options = {
  formatError: apolloErrors.formatError,
};

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Graphcool({
      typeDefs: 'src/generated/database.graphql',
      endpoint: process.env.GRAPHCOOL_ENDPOINT,
      secret: process.env.GRAPHCOOL_SECRET,
      debug: true,
    }),
  }),
});

server.start(options, () => console.log('Server is running on http://localhost:4000'));
