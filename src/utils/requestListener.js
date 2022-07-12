const requestHandler = require('../api/requestHandler');


async function requestListener(request, response) {
    response.status = code => {
        response.statusCode = Number.parseInt(code);
        return response
    };

    response.json = body => {
        const data = JSON.stringify(body);
        return response.setHeader('Content-Type', 'application/json').end(data)
    };

    response
    .setHeader('Server', 'UsersAPI')
    .setHeader('Connection', 'close');


    return requestHandler(request, response)
};


module.exports = requestListener