const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello from express!')
// });

// app.get('/product/1', (req, res) => {

//     res.send(('Product ID: 1'))
// })

// app.get('/product/2', (req, res) => {

//     res.send(('Product ID: 2'))
// })

// app.get('/product/:id', (req, res) => {
//     res.send(`Product ID: ${req.params.id}`)
// })

app.get('/product/:id(\\d+)', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    res.send(`Product ID: ${productId}`)
})

const port = 8000;

app.listen(port, () => console.log(`listening on port ${port}`));