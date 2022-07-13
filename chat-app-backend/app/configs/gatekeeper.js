// app/configs/gatekeeper.js

module.exports = {
    baseUrl : 'https://localhost:8080/gatekeeper',
    tokens: {
        // This is the base options for all token generators.
        $: {
            issuer: 'gatekeeper',
            expiresIn: '1h',
            algorithm: 'HS256',
            secret: 'ssshhh'
        }
    },
};