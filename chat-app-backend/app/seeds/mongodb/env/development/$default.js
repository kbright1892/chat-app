// app/seeds/mongodb/$default.js

const {Seed} = require ('@onehilltech/blueprint-mongodb');
const dab = require ('@onehilltech/dab');
const faker = require ('@faker-js/faker');

module.exports = Seed.extend ({
    model () {
        return {
            message: dab.times (50, i => ({
                text: faker.faker.lorem.sentence(5),
                user: faker.faker.name.firstName()
            })),

            native: dab.times (3, (i) => {
                let name = `client${i}`;
                return { name,  client_secret: name,  email: `${name}@no-reply.com` };
            }),

            accounts: dab.times (5, (i) => {
                let username = `tester${i}`;
                return {username, password: username, email: `${username}@no-reply.com`};
            }),

            user_tokens: dab.map (dab.get ('accounts'), (account) => {
                return {
                    client: dab.ref ('native.0'),
                    account: account._id,
                    refresh_token: dab.id ()
                };
            })
        }
    }
});
