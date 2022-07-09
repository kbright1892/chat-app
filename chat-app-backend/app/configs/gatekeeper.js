// app/configs/gatekeeper.js

module.exports = {
    tokens: {
        // This is the base options for all token generators.
        $: {
            issuer: 'gatekeeper',
            expiresIn: '30m',
            algorithm: 'HS256',
            secret: 'ssshhh'
        }
    },
};