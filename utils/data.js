// Array of usernames and emails
const users = [
    {
        username: 'emily-liz',
        email: 'emily@email.com'
    },
    {
        username: 'portia-uma',
        email: 'portia@email.com'
    },
    {
        username: 'barbara',
        email: 'barbara@email.com'
    },
    {
        username: 'catharine-mag',
        email: 'catharine@email.com'
    },
    {
        username: 'vonahee',
        email: 'vonahee@email.com'
    },
    {
        username: 'stefan',
        email: 'stefan@email.com'
    },
    {
        username: 'timothee',
        email: 'timothee@email.com'
    },
    {
        username: 'glenda',
        email: 'glenda@email.com'
    },
    {
        username: 'sedwig',
        email: 'sedwig@email.com'
    },
    {
        username: 'jennifer',
        email: 'jennifer@email.com'
    },
];

// Array of thoughts
const thoughts = [
    'Coding is the coolest hobby to have.',
    'This morning I had coffee and a croissant for breakfast.',
    'I am super tired. TGIF!',
    'There is a super rare comet flying over Earth tonight!',
    'The best place I have travelled to is Sydney, Australia.',
    'This weekend, I am visiting the zoo with my nephew!',
    'Only three more days until my vacation starts!',
    'This work project is super engaging.',
    'This work project is super boring.',
    'I watched two movies last night!',
];

// Array of reactions
const reactions = [
    'This is awesome!',
    'I agree!',
    'I disagree.',
    'Cool!',
    'Can you elaborate more?',
    'Thank you for sharing your thoughts.',
    'This is great!',
    'I do not understand this.',
    'So amazing!',
    'I love it!',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomName = () =>
// TODO: add logic to separate email from username in users array
  getRandomArrItem(users);

// Function to generate random thoughts and reactions to add to db
const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughts),
        username: getRandomName(),
        reactions: [...getReactions(3)],
      });
    }
    return results;
};

// Create the reactions that will be added to each thought
const getReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(reactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactioneBody: getRandomArrItem(reactions),
        username: getRandomName(),
      });
    }
    return results;
};  

// Export users array and getRandomThoughts()
module.exports = { users, getRandomThoughts }