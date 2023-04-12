# API Batepapo-UOL

Este é um projeto de uma API para o batepapo-uol, utilizando o framework Express e o banco de dados MongoDB. A API é capaz de gerenciar dados pelas rotas /messages, /participants e /status.

## Rotas

### /messages
- GET: retorna todas as mensagens armazenadas no banco de dados.
- POST: adiciona uma nova mensagem ao banco de dados.
- DELETE: remove uma mensagem do banco de dados.
- PUT: atualiza uma mensagem existente no banco de dados.

##/participants
- GET: retorna todos os participantes do chat armazenados no banco de dados.
- POST: adiciona um novo participante ao chat no banco de dados.

/status
POST: insere um novo tempo de expiração para o usuário permanecer no chat.

## Uso
Para usar a API, certifique-se de ter o Node.js e o MongoDB instalados em sua máquina. Em seguida, siga as instruções abaixo:

1. Clone o repositório.
2. Execute o comando npm install para instalar as dependências.
3. Execute o comando npm start para iniciar o servidor.
4. Use as rotas acima para gerenciar os dados do chat.

## Conclusão
Este projeto foi realizado para colocar em prática o uso do framework express e o banco de dados MongoDB.
Nele foi possível utilizar alguns dos principais métodos da biblioteca mongodb e por em prática o processo de configuração do ambiente de desenvolvimento.
