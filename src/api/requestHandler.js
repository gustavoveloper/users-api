const {
    matchRegexp,
    getErrorResponseBody,
    getSuccessResponseBody,
    getUserIdFromURL
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
            const user = await getUserById(getUserIdFromURL(url));

            if (user === null) return response.status(404).json(getErrorResponseBody('Usuário não encontrado'));

            return response.json(getSuccessResponseBody(user))
        }

        else {
            return response.status(404).json(getErrorResponseBody('Recurso não encontrado'))
        }
    }

    else {
        return response.status(405).json(getErrorResponseBody(`Método HTTP não suportado: ${method}`))
    }
};


module.exports = requestHandler