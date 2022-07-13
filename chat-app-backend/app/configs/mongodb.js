// mongodb.config.js

module.exports = {
    connections: {
        $default: {
            uri: 'mongodb://localhost:27017/chat-app',
            seed: true,    // seed the database connection [default=false]
            options: {            // mongoose connection options
                useUnifiedTopology: true
            }
        }
    }
};