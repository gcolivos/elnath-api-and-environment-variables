var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function (req, res) {

    var keyword = req.query.q;

    var fullRequestUrl = 'https://api.giphy.com/v1/gifs/search';
    fullRequestUrl += '?api_key=' + process.env.GIPHY_API_KEY;
    fullRequestUrl += '&q=' + keyword;
    fullRequestUrl += '&rating=g';


    request(fullRequestUrl, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.send(body);
    })
})

router.get('/random', function (req, res) {
    var fullRequestUrl = 'http://api.giphy.com/v1/gifs/random';
    fullRequestUrl += '?api_key=' + process.env.GIPHY_API_KEY;
    fullRequestUrl += '&rating=y';

    request(fullRequestUrl, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.send(body);
    });
})

module.exports=router;