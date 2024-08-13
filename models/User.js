// use Users and NOT User when naming please
// Destructure schema

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Regex to validate email format
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Virtual for friendCount
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = mongoose.model("users", userSchema); // Create the User model using mongoose.model
module.exports = User;
