const { makeExecutableSchema } = require("graphql-tools");

// Types
const typeDefs = `
  type Query {
    ping: String
  }
`;

// Resolvers
const resolvers = {
  Query: {
    ping: async () => "pong"
  }
};

// Export schema
module.exports = makeExecutableSchema({
  resolvers,
  typeDefs
});
