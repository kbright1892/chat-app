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

            native: [{
                _id: dab.id('62ce1c049e350f0d4d77dbb5'),
                name: 'native_client',
                client_secret: 'secret',
                email: 'no@no.com'
            }],

            accounts: dab.times (5, (i) => {
                let username = `tester${i}`;
                return {username, password: username, email: `${username}@no-reply.com`};
            })
        }
    }
});
