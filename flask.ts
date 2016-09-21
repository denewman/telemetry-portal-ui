var express = require('express');
var router = express.Router();

/* GET (single) */
router.get('/:object/:ID', function(req, res, next) {
    var request = require('request');

    var _uri = 'http://localhost:5001/';

    _uri += req.params.object + '/' + req.params.ID;

    console.log(_uri);

    request.get( _uri, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body); 
            res.send(body);
        }
    })
});

/* GET (all) */
router.get('/:object', function(req, res, next) {
    var request = require('request');

    var _uri = 'http://localhost:5001/';

    _uri += req.params.object;

    console.log( _uri);

    request.get( _uri, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body); 
            res.send(body);
        }
    })
});

/* POST */
router.post('/:object', function(req, res, next) {

    var request = require('request');

    var options = {
        uri: 'http://localhost:5001/' + req.params.object,
        method: 'POST',
        json: req.body
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body); // Print the shortened url.
            res.send(body);
        }
    });

});

/* DELETE (single)*/
router.delete('/:object/:ID', function(req, res, next) {
    var request = require('request');
    var _uri = 'http://localhost:5001/';

    _uri += req.params.object + '/' + req.params.ID;

    var options = {
        uri:  _uri,
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
    var request = require('request');
    var _uri = 'http://localhost:5001/';

    _uri += req.params.object;

    var options = {
        uri:  _uri,
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
