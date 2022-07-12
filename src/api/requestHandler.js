const {
    matchRegexp,
    getErrorResponseBody,
    getSuccessResponseBody
} = require('../helpers');

const getAllUsers = require('../utils/getAllUsers');
const getUserById = require('../utils/getUserById');


async function requestHandler(request, response) {
    const { url, method } = request;


    if (method === 'GET') {
        if (matchRegexp(/^\/(api\/?)?$/, url)) { // "/[api]" endpoint.
            const users = await getAllUsers();
            return response.json(getSuccessResponseBody(users))
        }

        else if (matchRegexp(/^\/(api\/)?[0-9]+\/?$/, url)) { // "/[api/]{id}" endpoint.
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