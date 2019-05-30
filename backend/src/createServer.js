<<<<<<< HEAD
const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

=======
const { GraphQLServer, PubSub } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const Subscription = require('./resolvers/Subscription');
const db = require('./db');

// Create GraphQL Subscription layer
const pubsub = new PubSub();

>>>>>>> fddfa989525de6d245c81b6d27d3e195f92c57d2
// Create the GraphQL Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
<<<<<<< HEAD
=======
      Subscription,
>>>>>>> fddfa989525de6d245c81b6d27d3e195f92c57d2
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
<<<<<<< HEAD
    context: req => ({ ...req, db }),
=======
    context: req => ({ ...req, db, pubsub }),
>>>>>>> fddfa989525de6d245c81b6d27d3e195f92c57d2
  });
}

module.exports = createServer;
