# Letterman

Letterman will handle all responses and request to an Innotec REST API. Adventious Letterman get the authorization-token and API-entrypoint from Localstorage. If the API response statuscode 401, the module delete the token from localstorage.

### Installation
```JSON
{
    "letterman": "https://github.com....."
}
```
### Implementate in Project
```javascript
    var letterman = require('letterman');
```
##### GET
```javascript
    var options = { route: 'workorder' };

    letterman.get(options, function(err, cb) {
        if (err) {
        return console.log(err);
        }

        // Implementate your code
    });
```
##### POST
```javascript
    var options = { route: 'authorization', body: data }

    letterman.post(options, function(err, cb) {
        if (err) {
        return console.log(err);
        }

        // Implementate your code
    });
```
##### DELETE
```javascript
    var options = { route: 'authorization', body: data }

    letterman.delete(options, function(err, cb) {
        if (err) {
        return console.log(err);
        }

        // Implementate your code
    });
```
##### PATCH
```javascript
    var options = { route: 'workorder/51044', body: data }

    letterman.patch(options, function(err, cb) {
        if (err) {
        return console.log(err);
        }

        // Implementate your code
    });
```

##### DELETE
```javascript
    var options = { route: 'workorder/51044', body: data }

    letterman.delete(options, function(err, cb) {
        if (err) {
        return console.log(err);
        }

        // Implementate your code
    });
```
