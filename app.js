const yargs = require('yargs');

const env = require('./setEnv-module');

const oauth = require('./oauth-module-with-promise');


const pas = require('./pas-module-with-promise');


const oauth_cb = require('./oauth-module-with-callback');

const pas_cb = require('./pas-module-with-callback');

const argv = yargs
    .options({
        e: {
            demand: true,
            alias: 'environment',
            describe: 'where you would like to run the test cases',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

set_env = env.environment(argv.environment)


// here we start of calling 2 different modules and synchronise them with promises


oauth.get_oauth_token(set_env).then((results) => {
        console.log(results)

        return pas.get_session_id(set_env, results.access_token).then((results) => {

            console.log(results)
        }, (error) => {
            console.log(error);
        })
    }

    , (error) => {

        console.log(error);

    });

// here we call  2 different modules and synchronise them with callback functionality


oauth_cb.get_oauth_token(set_env, (error, res) => {

    if (error) {
        console.log(error);
    } else {

        console.log(res);

        pas_cb.get_session_id(set_env, res.access_token, (error, res) => {

            if (error) {
                console.log(error);
            } else {

                console.log(res);
            }


        })

    }


});
