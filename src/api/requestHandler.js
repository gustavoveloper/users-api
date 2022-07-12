const { matchRegexp, getErrorResponseBody } = require('../helpers');


async function requestHandler(request, response) {
    const { url, method } = request;


    if (method === 'GET') {}

    else {
        const body = getErrorResponseBody(`Método HTTP não suportado: ${method}`);
        return response.status(405).json(body)
    }
};


module.exports = requestHandler