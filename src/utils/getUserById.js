const getAllUsers = require('./getAllUsers');


async function getUserById(id) {
    const users = await getAllUsers();

    let result = null;


    for (const user of users) { // Linear search
        if (user.id === id) result = user
    };


    return result
};


module.exports = getUserById