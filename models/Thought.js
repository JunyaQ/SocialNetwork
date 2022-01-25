const { Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    }, 
    //use reactionschema to validate data for reactions
    reactions:[ReactionSchema]
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

    
const Thought = model("Thought",ThoughtSchema)
module.exports = Thought;