const { Schema, model} = require('mongoose');

const ReactionSchema = new Schema({
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const Reaction = model("Reaction",ReactionSchema);
module.exports = ReactionSchema;
//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.