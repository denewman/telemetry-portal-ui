var app = require('./index');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var request = require('request');
var flaskURL = 'http://localhost:5001/';


app.use(bodyParser.json());

/* GET (single) */
router.get('/:object/:ID', function(req, res, next) {

    var apiURL = String(flaskURL);

    apiURL += req.params.object + '/' + req.params.ID;

    console.log(apiURL);

    request.get( apiURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body); 
            res.send(body);
        }
    })
});

/* GET (all) */
router.get('/:object', function(req, res, next) {

    var apiURL = String(flaskURL);

    apiURL += req.params.object;

    console.log( apiURL);

    request.get( apiURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body); 
            res.send(body);
        }
    })
});


/* POST */
router.post('/:object', function(req, res, next) {

    var apiURL = String(flaskURL);
    apiURL += req.params.object;

    console.log("Request sent to: " + apiURL);

    request.post(
        apiURL,
        { json: req.body },
        function (error, response, body) {

            console.log(req.body)

            if (!error && response.statusCode == 200) {
                console.log(body);
                res.send(body);
            }
        }
    );

});


/* DELETE (single)*/
router.delete('/:object/:ID', function(req, res, next) {

    var apiURL = String(flaskURL);

    apiURL += req.params.object + '/' + req.params.ID;

    var options = {
        uri:  apiURL,
        method: 'DELETE',
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.send(body);
        }
    });
});

/* DELETE (all) */
router.delete('/:object', function(req, res, next) {
    var apiURL = String(flaskURL);

    apiURL += req.params.object + '/' + req.params.ID;

    var options = {
        uri:  apiURL,
        method: 'DELETE',
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.send(body);
        }
    });
});

module.exports = router;
