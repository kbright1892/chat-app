// app/routers/endpoint.js

const blueprint = require ('@onehilltech/blueprint');
const { Router } = blueprint;
const {cors} = require("@onehilltech/blueprint-gatekeeper");
const {env} = require("@onehilltech/blueprint");

module.exports = Router.extend ({
    specification: {
        '/': {
            use: [cors ({
                origin: env !== 'production' ? true : null
            })]
        },
        '/gatekeeper': blueprint.mount ('@onehilltech/blueprint-gatekeeper:v1'),

        // Let's protect the /v1 routes.

        '/v1': {
            policy: 'gatekeeper.auth.bearer'
        }
    }
});