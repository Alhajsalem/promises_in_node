const request = require('request');


var get_oauth_token = (env) => {

    return new Promise((resolve,reject)=> {

        var headers = {
            'accept': 'application/json',
            'content-type': 'application/x-www-form-urlencoded'
        }


        var options = {
            url: `${env.oauth.url}/api/oauth/token`,
            method: 'POST',
            headers: headers,
            json: true,
            form: {
                'client_id': env.oauth.client_id,
                'client_secret': env.oauth.client_secret,
                'grant_type': 'client_credentials',
                'scope': 'registration'
            }
        }

        request(options, function (error, response, body) {

            if (!error && response.statusCode == 200) {

                resolve({
                    access_token: body.access_token,
                    expires_in: body.expires_in,
                    scope: body.scope,
                    token_type: body.token_type


                });
            }

            else
                reject('Unable to connect to the server')

        });

    });
};


module.exports.get_oauth_token = get_oauth_token;








