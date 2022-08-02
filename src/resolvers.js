export const resolvers = {
  Query: {
    getTodos: async (_, _args, { dataSources: { todos } }) => {
      return todos.getTodos();
    },
    getTodo: async (_, { id }, { dataSources: { todos } }) => {
      return todos.getTodo(id);
    },
    getUsers: async (_, _args, { dataSources: { users } }) => {
      return users.getUsers();
    },
    getUser: async (_, { id }, { dataSources: { users } }) => {
      return users.getUser(id);
    },
  },
  Mutation: {
    createTodo: async (_, args, { dataSources: { todos } }) => {
      return todos.createTodo(args);
    },
    updateTodo: async (_, args, { dataSources: { todos } }) => {
      return todos.updateTodo(args);
    },
    deleteTodo: async (_, args, { dataSources: { todos } }) => {
      return todos.deleteTodo(args);
    },
    createUser: async (_, args, { dataSources: { users } }) => {
      return users.createUser(args);
    },
  },
};
