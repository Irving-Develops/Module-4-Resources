const express = require('express');

const app = express();

app.set('view engine', 'pug')


app.get('/', (req, res) => {
    res.send('Hello, world!')
})



app.all('*', (req, res) => {
    console.log(`Request method: ${req.method}`)
    console.log(`Request path: ${req.path}`)

    // res.send(`Hello from the pug template app!`)
    res.render('layout', { 
        title: 'Welcome',
        heading: 'Welcome to the pug template app'
    })
})




const port = 8000;

app.listen(port, () => console.log(`listening on port ${port}`));