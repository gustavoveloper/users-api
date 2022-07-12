module.exports = {
    matchRegexp: (regexp, text) => regexp.test(text),

    getErrorResponseBody: error => ({
        error,
        data: null
    }),

    getSuccessResponseBody: data => ({
        error: null,
        data
    }),

    getUserIdFromURL: url => {
        const routes = url.split('/');

        if (url.endsWith('/')) routes.pop();

        return Number.parseInt(routes[routes.length - 1])
    }
}