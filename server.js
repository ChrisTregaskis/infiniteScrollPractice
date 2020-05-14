global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');

// instantiate unsplash obj that takes all our parameters and our config.
// we can then use it to make requests to the api
const unsplash = new Unsplash({
    accessKey: config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
});

const app = express();

//api route
app.get('/api/photos', (req, res) => {
    unsplash.photos
        .listPhotos(1, 30)
        .then(toJson)
        .then(json => res.json(json));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));