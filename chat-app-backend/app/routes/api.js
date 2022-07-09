// app/routes/api.js

const { env } = require ('@onehilltech/blueprint');
const { cors } = require ('@onehilltech/blueprint-gatekeeper');

module.exports = {
    '/api': {
        use: [cors ({
            origin: env !== 'production' ? true : null
        })]
    }
};