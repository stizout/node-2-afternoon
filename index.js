const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./products_controller');

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
}).catch(err => console.log(err));


app.get('/api/products', controller.readAll);

app.get('/api/product/:id', controller.read);

app.post('/api/product', controller.create);

app.put('/api/product/:id', controller.update);

app.delete('/api/product/:id', controller.delete);












app.listen(3000, () => console.log('Server Started Fool!'));