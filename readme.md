# Letterman

Letterman will handle all responses and request to an Innotec REST API. Adventious Letterman get the authorization-token and API-entrypoint from Localstorage. If the API response statuscode 401, the module delete the token from localstorage.

### Installation

        {
        "letterman": "https://github.com....."
        }

### Implementate in Project

        var letterman = require('letterman');

##### GET

        var options = { route: 'workorder' };

        letterman.get(options, function(err, cb) {
            if (err) {
            return console.log(err);
            }

            // Implementate your code
        });
##### POST

        var options = { route: 'authorization', body: data }

        letterman.post(options, function(err, cb) {
            if (err) {
            return console.log(err);
            }

            // Implementate your code
        });
##### DELETE

        var options = { route: 'authorization', body: data }

        letterman.delete(options, function(err, cb) {
            if (err) {
            return console.log(err);
            }

            // Implementate your code
        });
##### PATCH

        var options = { route: 'workorder/51044', body: data }

        letterman.patch(options, function(err, cb) {
            if (err) {
            return console.log(err);
            }

            // Implementate your code
        });


##### DELETE

        var options = { route: 'workorder/51044', body: data }

        letterman.delete(options, function(err, cb) {
            if (err) {
            return console.log(err);
            }

            // Implementate your code
        });
