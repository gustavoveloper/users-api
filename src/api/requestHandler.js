const { matchRegexp, getErrorResponseBody } = require('../helpers');

const getAllUsers = require('../utils/getAllUsers');


async function requestHandler(request, response) {
    const { url, method } = request;


    if (method === 'GET') {
        if (matchRegexp(/^\/(api\/?)?$/, url)) {
            const users = await getAllUsers();
            return response.json(users)
        }

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