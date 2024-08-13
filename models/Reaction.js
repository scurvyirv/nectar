// Reaction schema is a subdocument to the Thought model
const mongoose = require("mongoose");
const { Schema } = mongoose;

const reactionSchema = new Schema(
  {
    // reactionId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "thoughts", // reference to Thought model
    // },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (createdAt) {
        return new Date(createdAt).toLocaleString();
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
