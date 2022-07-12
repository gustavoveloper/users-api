# UsersAPI - Um _webservice_ que retorna dados de _users_

## Como inicializar?
Antes, seja esclarescido que é preciso definir/setar algumas variáveis de ambiente:

- ```HOST``` (```localhost```, por padrão): _Hostname_ do servidor da API.
- ```PORT``` (```8080```, por padrão): Porta TCP onde o servidor deve escutar.
- ```DATA_FILE_PATH```: Caminho (absoluto) do arquivo JSON onde se encontram os dados dos usuários.

As variáveis que possuem um valor padrão (_default value_) não precisam ser setadas.

Após essas configurações, instale as dependências do projeto e execute o _script_ ```start``` do _package.json_. Seguindo essas instruções, deve ser capaz de ver algo em seu terminal como:

```
UsersAPI server executando em tcp://<server-hostname>:<server-port>...
```

## Formato de resposta
**A API é JSON**. Isto significa que os corpos das _responses_ retornadas a um _client_ são enviadas em formato JSON por padrão.

A propósito, cada resposta do servidor segue a seguinte estrutura:

```
{ "error": <error>, "data": <data> }
```

O campo ```error``` vem preenchido com uma mensagem de erro (caso não haja erro, o mesmo recebe ```null``` como valor) enquanto o campo ```data``` vem preenchido com os dados da resposta (caso haja algum erro, o mesmo recebe ```null``` como valor).

## Como usar?
O _webservice_ possui apenas dois _endpoints_, descritos abaixos.

### ```GET /[api]```
Retorna uma lista como todos os usuários registrados.

### ```GET /[api/]<id>```
Retorna o usuário com o ID dado. Caso o mesmo não seja encontrado, um erro 404 é devolvido ao _client_.