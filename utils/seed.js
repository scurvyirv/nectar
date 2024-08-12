const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  getRandomUser,
  getRandomThought,
  getRandomReaction,
} = require("./data");

connection.on("error", (err) => console.error(err));

connection.once("open", async () => {
  console.log("connected");

  // Drop existing data if it exists
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Create an array of users
  const users = [];
  for (let i = 0; i < 10; i++) {
    const user = getRandomUser();
    users.push(user);
  }

  // Insert users into the database
  const createdUsers = await User.collection.insertMany(users);

  // Create an array of thoughts and associate them with random users
  const thoughts = [];
  for (let i = 0; i < 10; i++) {
    const thought = getRandomThought();
    const user =
      createdUsers.ops[Math.floor(Math.random() * createdUsers.ops.length)];
    thought.userId = user._id;
    thought.username = user.username;

    // Generate random reactions for each thought
    for (let j = 0; j < 5; j++) {
      const reaction = getRandomReaction();
      thought.reactions.push(reaction);
    }

    thoughts.push(thought);
  }

  // Insert thoughts into the database
  const createdThoughts = await Thought.collection.insertMany(thoughts);

  // Associate thoughts with users
  for (let i = 0; i < createdThoughts.ops.length; i++) {
    const thought = createdThoughts.ops[i];
    await User.updateOne(
      { _id: thought.userId },
      { $push: { thoughts: thought._id } }
    );
  }

  console.log("Seeding complete! 🌱");
  process.exit(0);
});
