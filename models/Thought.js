const { Schema, model } = require('mongoose');

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
        // Moment
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    }, 
    reactions:[ReactionsSchema]
},
{
    toJSON:{
        virtuals:true,
        getters:true
    },
    id: false
})
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

    
const Thought = model("Thought",ThoughtSchema)
module.exports = Thought;