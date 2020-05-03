import { ApolloServer } from "apollo-server-express";
import express from "express";
import compression from "compression";
import cors from "cors";
import schema from "./schema";
import expressPlayGround from "graphql-playground-middleware-express";

const app = express();
const PORT = 3500;

app.use("*", cors());
app.use(compression());

const server = new ApolloServer({
  schema,
  introspection: true,
});

server.applyMiddleware({ app });

app.get(
  "/",
  expressPlayGround({
    endpoint: "graphql",
  })
);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
