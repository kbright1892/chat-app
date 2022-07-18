const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

// use mongodb.Types to access mongoose.Types

const schema = new Schema ({
    /// The email address of the user.
    email: { type: String, required: true, index: true },

    /// The first name of the user.
    username: { type: String },
});

module.exports = mongodb.resource ('user', schema, 'gatekeeper_accounts');