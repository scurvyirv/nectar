const { Thought } = require("../models");

module.exports = {
  // POST new reaction to a thought
  async addReaction(req, res) {
    try {
      // search thought by ID
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: "No thought with this ID!" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE existing reaction by id
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: "No thought with this ID!" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
