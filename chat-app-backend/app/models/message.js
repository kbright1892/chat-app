// app/models/message.js
const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

// use mongodb.Types to access mongoose.Types

const schema = mongodb.Schema ({
    text: {type: String, required: true, trim: true},
    create_dt : {type: String, required: true, trim: true},
    edit_dt : {type: String,required: false, trim: true}
});

module.exports = mongodb.model ('message', schema, 'messages');