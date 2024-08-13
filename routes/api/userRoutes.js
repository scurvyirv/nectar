const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// /api/Users (create new user)
router.route("/").get(getUsers).post(createUser);

// /api/Users (view all users)
router.route("/").get(getUsers);

// /api/Users/:UserId (get single user)
router.route("/:UserId").get(getSingleUser);

// /api/Users/:UserId (update existing user)
router.route("/:UserId").get(getSingleUser).put(updateUser);

// /api/Users/:UserId (delete existing user)
router.route("/:UserId").get(getSingleUser).delete(deleteUser);

module.exports = router;
