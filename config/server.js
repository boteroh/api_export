const express = require('express');
const dbconnect = require('../db/config');
const { getProduct, postProduct, putProduct, deleteProduct } = require('../controllers/product.controller')

class Server {
    constructor() {
        this.app = express();
        this.connectToDatabase;
        this.pathProduct = "/products";
        this.route();
        this.listen();
    }

    route() {
        this.app.use(express.json());
        this.app.get(this.pathProduct, getProduct);
        this.app.post(this.pathProduct, postProduct);
        this.app.put(this.pathProduct, putProduct);
        this.app.delete(this.pathProduct + '/:nameProduct', deleteProduct);
    }

    async connectToDatabase() {
        try {
            await dbconnect();
            console.log('Database Connected');
        } catch (error) {
            console.error('Error connecting to database: '. error);
        }
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Server is running');
        });
    }
};

module.exports = Server;