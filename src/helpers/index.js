module.exports = {
    matchRegexp: (regexp, text) => regexp.test(text),

    getErrorResponseBody: error => ({
        error,
        data: null
    }),

    getSuccessResponseBody: data => ({
        error: null,
        data
    })
}