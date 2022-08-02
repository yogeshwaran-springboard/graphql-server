import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = Schema({
  name: String,
  age: String,
});

export const User = mongoose.model("User", UserSchema);
