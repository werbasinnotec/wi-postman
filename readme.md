# wi-postman

Postman will handle all responses and request to an Innotec REST API. 

### Installation

        {
        "wi-postman": "https://github.com....."
        }

### Implementate in Project

        var postman = require('wi-postman');

##### GET

        var options = { entrypoint: 'http://jsonplaceholder.typicode.com', ressource: '/posts/1' };

        postman.get(options, function(res) {
            console.log(res);
            // The body in object res.statustext
            // Implementate your code
        });

##### POST

        var options = { entrypoint: 'http://jsonplaceholder.typicode.com', send: { foo: 'bar' } ressource: '/posts/1' };

        postman.post(options, function(res) {
            console.log(res);
            // The body in object res.statustext
            // Implementate your code
        });
##### DELETE

        var options = { entrypoint: 'http://jsonplaceholder.typicode.com', ressource: '/posts/1' };

        postman.delete(options, function(res) {
            console.log(res);
            // The body in object res.statustext
            // Implementate your code
        });
##### PATCH

        var options = { entrypoint: 'http://jsonplaceholder.typicode.com', send: { foo: 'bar' } ressource: '/posts/1' };

        postman.patch(options, function(res) {
            console.log(res);
            // The body in object res.statustext
            // Implementate your code
        });

##### PUT

        var options = { entrypoint: 'http://jsonplaceholder.typicode.com', send: { foo: 'bar' } ressource: '/posts/1' };

        postman.put(options, function(res) {
            console.log(res);
            // The body in object res.statustext
            // Implementate your code
        });

