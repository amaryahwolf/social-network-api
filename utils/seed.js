const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const thoughts = getRandomThoughts(10);

    await Thought.collection.insertMany(thoughts);

    // !ICEBOX: logic to seed thoughts with associated users
    // const seededThoughts = await Thought.find()
    // console.log(seededThoughts);
    // // Loop through every thought
    // let updatedThoughts = seededThoughts.map(thought => {
    //     // Loop through every user and find if the current thought matches the user's username
    //     users.map((user, i) => {
    //         if (thought.username === user.username) {
    //             // Update user array to include everything prior plus thought id of current thought to its thought's array
    //             // Conditionally render user and thoughts using ?
    //             users[i] = {...user, thoughts: [...(user?.thoughts?.length ? user.thoughts : []), thought._id]}
    //         }
    //     })
    // })

    await User.collection.insertMany(users);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});