const { Service, computed } = require('@onehilltech/blueprint');

module.exports = Service.extend({

    _messages: null,

    init() {
        this._super.call(this, ...arguments);
    },

    add(message) {
        this._messages.push(message);
    },

    messages: computed({
        get() {
            return this._messages;
        }
    }),

    getAll() {
        return this._messages;
    },

    get(id) {
        return this._messages.find(message => message.id === id);
    },

    remove(id) {
        let index = this._messages.findIndex(message => message.id === id);

        if(index === -1) {
            return false;
        }

        this._messages.splice(index, 1);
        return true;
    },

});