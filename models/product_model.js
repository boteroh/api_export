const { model, Schema } = require ('mongoose');

const prodctSchema = new Schema({
    nameProduct: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    }
});

module.exports = model('Product', prodctSchema, 'product');