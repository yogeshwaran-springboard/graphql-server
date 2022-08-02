import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: String!
  }
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    description: String!
    user: User!
  }

  type Query {
    getTodos: [Todo!]!
    getTodo(id: ID!): Todo!
    getUsers: [User!]!
    getUser(id: ID!): User!
  }

  type Mutation {
    createTodo(
      title: String!
      description: String!
      completed: Boolean!
      user: String!
    ): Todo!
    deleteTodo(id:String!): Todo!
    updateTodo(
      id: String
      title: String
      description: String
      completed: Boolean
      user:String
    ): Todo!
    createUser(name: String!, age: String!): User!
  }
`;
