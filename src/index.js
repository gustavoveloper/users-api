const server = require('./server');

const { server: serverConfig } = require('./config');


server.listen(serverConfig.port, serverConfig.host, () => {
    console.clear();
    console.log(`UsersAPI server executando em tcp://${serverConfig.host}:${serverConfig.port}...` + '\n\n')
})