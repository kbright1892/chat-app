// app/seeds/mongodb/$default.js

const {Seed} = require ('@onehilltech/blueprint-mongodb');
const dab = require ('@onehilltech/dab');
const faker = require ('@faker-js/faker');

module.exports = Seed.extend ({
    model () {
        return {
            message: dab.times (50, i => ({
                text: faker.lorem.sentence(5)
            }))
        }
    }
});
