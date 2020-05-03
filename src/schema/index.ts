import "graphql-import-node"; // help us to bring gralpql files
import typeDefs from "./schema.graphql";
import resolvers from "./../resolvers/resolversMap";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
