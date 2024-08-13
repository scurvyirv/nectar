const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/Users (create new user)
router.route("/").get(getUsers).post(createUser);

// /api/Users (view all users)
router.route("/").get(getUsers);

// /api/Users/:UserId (get single user)
router.route("/:userId").get(getSingleUser);

// /api/Users/:UserId (update existing user)
router.route("/:userId").get(getSingleUser).put(updateUser);

// /api/Users/:UserId (delete existing user)
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(addFriend) // Add friend
  .delete(removeFriend); // Remove friend

module.exports = router;
