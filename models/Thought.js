const { Schema, model } = require('mongoose');
// Require Reaction schema
const Reaction = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String, 
            required: true,
            match: /^.{1,280}$/
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // TODO: add getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Virtual to retrieve length of thought's reactions array
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

// Export model
module.exports = Thought;
