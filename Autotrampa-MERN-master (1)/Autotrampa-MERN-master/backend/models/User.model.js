const mongoose = require("mongoose");
const { Double } = require("bson");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user_id: { type: String, required: true, unique: true },
  user_name: { type: String },
  user_surname: { type: String },
  username: { type: String },
  pasword: { type: String },
  phone_number: { type: Number },
  number_of_posts: { type: Number },
  address: { type: String },
  email: { type: String },
  picture: { type: String },
  type_of_account: { type: String },
  Url: { type: String },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
