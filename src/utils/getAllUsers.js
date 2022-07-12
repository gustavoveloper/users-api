const { readFileSync } = require('fs');

const { dataFilePath } = require('../config');


async function getAllUsers() {
    const data = readFileSync(dataFilePath).toString();
    return JSON.parse(data)
};


module.exports = getAllUsers