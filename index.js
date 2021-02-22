const express = require('express');
const app = express();
const fetch = require('node-fetch');
const today = require('./helpers/today');
// const convert = require('xml-js');
// let dataAsJson = {};

app.use(express.static('public'));

app.get('/', async (req, res) => {
    let URL = `https://api.benzinga.com/api/v2.1/calendar/earnings?parameters%5Bdate_from%5D=${today()}&parameters%5Bdate_to%5D=${today()}&token=79a4b64d9c9444ddaf5b3ab583ad1e12`
    let html = `<link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="style.css">
                <div id="date"><h3>Date: ${today()}</h3></div>`
    fetch(URL)
        .then(response => response.text())
        .then(xml => {
            res.send(html + xml);
            // dataAsJson = JSON.parse(convert.xml2json(str))
            // res.send(dataAsJson['elements'][0]['elements'][0]['elements']);
        })
        .catch(err => res.send(err));
})

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Listening to port 3000!'));