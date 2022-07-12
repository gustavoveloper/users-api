const { matchRegexp, getErrorResponseBody } = require('../helpers');


async function requestHandler(request, response) {
    const { url, method } = request;


    if (method === 'GET') {
        if (matchRegexp(/^\/(api\/?)?$/, url)) {}

        else {
            const body = getErrorResponseBody('Recurso não encontrado');
            return response.status(404).json(body)    
        }
    }

    else {
        const body = getErrorResponseBody(`Método HTTP não suportado: ${method}`);
        return response.status(405).json(body)
    }
};


module.exports = requestHandler