// app/routers/endpoint.js

const blueprint = require ('@onehilltech/blueprint');
const { Router } = blueprint;

module.exports = Router.extend ({
    specification: {
        '/gatekeeper': blueprint.mount ('@onehilltech/blueprint-gatekeeper:api'),

        // Let's protect the /api routes.
        '/api': {
            policy: 'gatekeeper.auth.bearer'
        }
    }
});