const mongoose = require("mongoose");
const { model } = require("./users.model");

const Schema = mongoose.Schema;

const postsSchema = new Schema(
  {
    userName: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true },
    postNumber: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postsSchema);

model.exports = Post;
