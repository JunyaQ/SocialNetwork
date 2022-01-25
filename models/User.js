const { Schema, model } = require('mongoose');
// username, email, thoughts, friends
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // use REGEX to validate email
        match: [/.+@.+\..+/]
    },
    thoughts: [{// populate
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{//populate
        type: Schema.Types.ObjectId,
        ref: 'User'
        }]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);
UserSchema.virtual("friendCount").get(function(){
    return this.friends.length;
})

const User = model("User",UserSchema)
module.exports = User;