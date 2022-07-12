async function logRequest(request, response) {
    response.on('finish', () => {
        const { method, url } = request;
        const { statusCode } = response;

        console.log(`${method} ${url} -- ${statusCode}`)
    })
};


module.exports = logRequest