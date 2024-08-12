const { Schema, Types } = require("mongoose");

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
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reaction",
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

// Virtual for reactionCount
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Export model instead of schema directly
const Thought = model("Thought", thoughtSchema);
module.exports = Thought;
