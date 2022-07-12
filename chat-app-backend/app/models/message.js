// app/models/message.js
const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

// use mongodb.Types to access mongoose.Types

const schema = mongodb.Schema ({
    text: {type: String, required: true, trim: true},
    user: {type: String, required: true, trim:true}
});

module.exports = mongodb.resource ('message', schema, 'messages');