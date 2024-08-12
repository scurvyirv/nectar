const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/UserController");

// /api/Users (create new user)
router.route("/").get(getUsers).post(createUser);

// /api/Users/:UserId (update existing user)
router.route("/:UserId").get(getSingleUser).put(updateUser);

// /api/Users/:UserId (delete existing user)
router.route("/:UserId").get(getSingleUser).delete(deleteUser);

module.exports = router;
