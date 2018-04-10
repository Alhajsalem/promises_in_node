set_env = require('./config.json');


var environment = (Env) => {

    if (Env == 'stage') {

        return set_env.env.stage;

    }

    else if (Env == 'test') {

        return set_env.env.test;

    }

    else if (Env == 'prod') {

        return set_env.env.prod;

    }
};

module.exports = {

    environment : environment

}