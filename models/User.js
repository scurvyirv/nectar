// use Users and NOT User when naming please
// Destructure schema
const { Schema, Types } = require("mongoose");

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
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  // Getter sets mongoose default configuration to set IDs to false
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

// Export model User
const User = model("User", userSchema);
module.exports = User;
