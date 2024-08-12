const usernames = ["jdoe", "lanastaffy", "dumbledorelores", "sequelizewho"];

const emails = [
  "jdoe@gmail.com",
  "lanastaffy@gmail.com",
  "dumbledorelores@yahoo.com",
  "nosequelizer@gmail.com",
];

const thoughts = [
  "Cruel Summer it is then",
  "I am so exhausted.",
  "Traffic sucks",
  "bumper? i hardly know her!",
];

const reactions = ["Yes, very this", "Mood.", "i cant even", "whyyy"];

// Get a random item from an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate random user data
const getRandomUser = () => ({
  username: getRandomArrItem(usernames),
  email: getRandomArrItem(emails),
});

// Generate random thought data
const getRandomThought = () => ({
  thoughtText: getRandomArrItem(thoughts),
  username: getRandomArrItem(usernames),
  createdAt: new Date(),
});

// Generate random reaction data
const getRandomReaction = () => ({
  reactionBody: getRandomArrItem(reactions),
  username: getRandomArrItem(usernames),
  createdAt: new Date(),
});

module.exports = { getRandomUser, getRandomThought, getRandomReaction };
