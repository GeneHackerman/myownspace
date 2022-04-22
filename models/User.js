const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: 'Please provide a username!',
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: 'Please provide an email address!',
            unique: true,
            match: [/.+@.+\..+/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
        },
        {
            toJSON: {
                virtuals: true,
                getters: true
            },
            id: false
        }  
);

// get total count of friends comments and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create UserModel using UserSchema
const User = model('User', UserSchema);

module.exports = User;