import { MongoDataSource } from "apollo-datasource-mongodb";
import { Todo } from "../models/todo";
import { User } from "../models/user";

export default class Todos extends MongoDataSource {
  async getTodos() {
    let res = await this.model.find().populate("user");
    console.log("res",res,res.length)
    return res.splice(res.length - 2, 2);
    // return res;
  }

  async getTodo(id) {
    let todoRes = await this.model.findById(id);
    let userRes = await User.findOne({ _id: todoRes.user.toString() });

    let newres = {
      id: todoRes._id,
      completed: todoRes.completed,
      description: todoRes.description,
      title: todoRes.title,
      user: {
        id: userRes._id.toString(),
        name: userRes.name,
        age: userRes.age,
      },
    };
    console.log("Toi", todoRes, userRes, newres);
    return newres;
  }

  async createTodo({ title, description, completed, user: userId }) {
    const newTodo = await this.model.create({
      user: userId,
      title,
      description,
      completed,
    });

    const response = await Todo.findOne({
      _id: newTodo._id.toString(),
    }).populate("user");
    console.log("New user", newTodo._id.toHexString(), response);

    return response;
  }

  async updateTodo({ id, title, description, completed, user: userId }) {
    const val = await this.model.updateOne(
      { _id: id },
      {
        title,
        description,
        completed,
        user: userId,
      }
    );

    const res = await Todo.findOne({ _id: id }).populate("user");
    console.log("RES", res, val);
    return res;
  }
  async deleteTodo({ id }) {
    return await this.model.findByIdAndDelete(id);
  }
}
