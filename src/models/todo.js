import mongoose from "mongoose";
const { Schema } = mongoose;

const TodoSchema = Schema({
  title: String,
  description: String,
  completed: Boolean,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const Todo = mongoose.model("Todo", TodoSchema);
