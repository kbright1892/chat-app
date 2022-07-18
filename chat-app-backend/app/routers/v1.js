// app/routers/v1.js
const { env } = require ('@onehilltech/blueprint');
const { cors } = require ('@onehilltech/blueprint-gatekeeper');

module.exports = {
    '/v1': {
        use: [cors ({
            origin: env !== 'production' ? true : null
        })]
    }
};