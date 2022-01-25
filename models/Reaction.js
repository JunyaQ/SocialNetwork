const { Schema, model} = require('mongoose');



const Reaction = model("Reaction",ReactionSchema);
module.exports = ReactionSchema;
//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.