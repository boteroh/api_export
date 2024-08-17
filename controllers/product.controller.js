const Product = require('../models/product_model');

// GET
const getProduct = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

const postProduct = async (req, res) => {
    let msg = "Product inserted";
    const body = req.body
    try {
        const product = new Product(body);
        await product.save();
    } catch (error) {
        msg = error;
    }
    res.json({ msg:msg });
};

const putProduct = async (req, res) => {
    let msg = 'Product Updated';
    const { nameProduct, price, weight } = req.body;
    try {
        await Product.findOneAndUpdate({ nameProduct: nameProduct, price: price, weight: weight });
    } catch (error) {
        msg = error;
    }
    res.json({ msg:msg });
};

const deleteProduct = async (req, res) => {
    let msg = 'Product Deleted';
    nameProduct = req.params.nameProduct;
    try {
        await Product.findOneAndDelete({ nameProduct: nameProduct });
    } catch (error) {
        msg = 'Ther was a problem while deleting';
    }
    res.json({ msg:msg });
};



module.exports = {
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
};