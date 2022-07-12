const dab = require ('@onehilltech/dab');

module.exports = {
    native: dab.times (3, (i) => {
        let name = `client${i}`;
        return { name,  client_secret: name,  email: `${name}@no-reply.com` };
    }),
};