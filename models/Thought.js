const mongoose = require("mongoose");
const { Schema } = mongoose;
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      // Set default timestamp to now
      default: Date.now,
      // Custom getter function for timestamp text
      get: function (createdAt) {
        return new Date(createdAt).toLocaleString();
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema], // 'reactions' is an array of the subdocument, reactionSchema
  },
  // Getter sets mongoose default configuration to set IDs to false
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Virtual for reactionCount
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model("thoughts", thoughtSchema); // Create the Thought model using mongoose.model
module.exports = Thought;
