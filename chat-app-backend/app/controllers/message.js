const { model } = require ('@onehilltech/blueprint');
const { ResourceController } = require('@onehilltech/blueprint-mongodb');

module.exports = ResourceController.extend({
    name: 'message',
    Model: model('message'),

    create () {
        return this._super (this, ...arguments).extend ({
            prepareDocument (req, doc) {
                // Make the authorized user the owner of the created resource.
                doc.user = req.user._id;
                doc.text = req.text;
                return doc;
            }
        });
    }
});