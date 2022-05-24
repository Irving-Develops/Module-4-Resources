const express = require('express');
const app = express();

app.set('view engine', 'pug');


app.all('*', (req, res) => {
      console.log(`Request method: ${req.method}`);
      console.log(`Request path: ${req.path}`);

    //   res.send('Hello from the Pug template example app!');

    const pageData = {
    title : 'welcome',
    heading: 'Welcome to my pug app',
    lorem: 'Three cool facts about pugs!',
    fact1: 'They dont have a nose',
    fact2: 'Pugs became popular after the release of Men in Black',
    fact3: 'The oldest pug to ever live was 32 years old'
};
    res.render('layout', pageData);
})


const port = 8081;

app.listen(port, () => { console.log(`listening on port ${port}`)});