const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

// /api/thoughts
router
  .route("/")
  .get(getThoughts) //get ALL thoughts
  .post(createThought); //post new thought

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought) //get single thought by id
  .put(updateThought) //post update thought by id
  .delete(deleteThought); //delete thought by id

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
