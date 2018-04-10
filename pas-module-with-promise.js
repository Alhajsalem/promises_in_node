const request = require('request');


var get_session_id = (env, token) => {

    return new Promise((resolve, reject) => {

        var headers = {
            'accept': 'application/json',
            'content-type': 'application/json',
            'authorization': 'Bearer ' + token
        }


        var options = {
            url: `${env.pas.url}/api/registration/start`,
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                'abusePreventionAccepted': true,

                'person': {'firstName': '', 'lastName': '', 'salutation': 'MR'},

                'email': '',

                'password ': '',

                'successUrl': '',

                'abortUrl': '',

                'errorUrl': '',

                'productId': parseInt(100005)
            })

        }

        request(options, function (error, response, body) {


            if (!error && response.statusCode == 200) {


                resolve({body: body});
            }

            else

                reject('Unable to connect to the server')

        });

    });
};


module.exports.get_session_id = get_session_id;