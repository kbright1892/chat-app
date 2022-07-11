// app/routers/endpoint.js
// noinspection JSVoidFunctionReturnValueUsed

const blueprint = require ('@onehilltech/blueprint');
const {cors} = require("@onehilltech/blueprint-gatekeeper");
const {env} = require("@onehilltech/blueprint");
const { Router } = blueprint;

module.exports = Router.extend ({
    specification: {
        '/v1': {
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