const { request } = require ('@onehilltech/blueprint-testing');

describe ('app | routers | message', function () {
    it ('should create a message', function () {
        const message = {
            text: 'Dummy Message',
            user: 'Someone'
        };

        return request ()
            .post ('/v1/messages')
            .send ({message})
            .expect (200, {message});
    });
});