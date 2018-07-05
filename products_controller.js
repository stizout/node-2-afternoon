

module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        const { name, description, price, imageUrl } = req.body
        db.create_product([name, description, price, imageUrl]).then((product) => res.status(200).json(product)).catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
    },
    read: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params
        console.log("ID",id)
        db.read_product(id).then((product) => res.status(200).send(product)).catch(err => {
            console.log(err);
            res.status(500).send("Error on the server side");
        })
    },
    readAll: (req, res, next) => {
        const db = req.app.get('db');
        db.read_products().then((products) => res.status(200).send(products)).catch(err => {
            console.log(err);
            res.status(500).send("Error on the server side");
        })
    },
    update: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params
        const { desc } = req.query
        console.log(desc);
        db.update_product([id, desc]).then((product) => res.status(200).send(product)).catch(err => {
            console.log(err);
            res.status(500).send("Error on the server side");
        })
    },
    delete: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_product(id).then((product) => res.status(200).send(product)).catch(err => {
            console.log(err);
            res.status(500).send("Error on the server side");
        })
    }
}