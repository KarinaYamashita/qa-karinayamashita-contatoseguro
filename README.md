# [QA] Teste técnico Contato Seguro - Karina Yamashita :clipboard:

Esse repositório contém uma aplicação para testes e2e, do fluxo de CRUD do usuário na tela de cadastro, para o teste técnico da empresa Contato Seguro. A automação dos testes foi realizada utilizando como linguagem de programação Javascript e POM( page Object Model).

## Estrutura

Para o desenvolvimento deste projeto a estrutura de diretórios é:

- cypress/support/data: diretório responsável por armazenar os arquivos dos objetos dos dados no cadastro do usuário e dos textos exibidos na tela ou mensagens de retorno.
- support/elements: diretório responsável por armazenar os arquivos dos objetos que contém o mapeamento dos elementos da aplicação.

- cypress/support/pageObjects: diretório que contém as classes, nas quais são armazenados os métodos e asserções empregados.

- cypress/e2e: diretório responsável por armazenar os arquivos de testes para cada uma das funcionalidades testadas.

- postman: diretório responsável por armazenar os arquivos de testes criados para os Testes de API com o Postman.

## Pré-requisitos:

Para que seja possível executar este projeto é necessário ter instalado:

- Node

- Cypress


## Instalação

Utilizando o Terminal/Console:

1. Clone o projeto : `git@github.com:KarinaYamashita/qa-karinayamashita-contatoseguro.git`

2. Acesse a pasta raiz do projeto

3. Execute o comando: `npm init`

4. Execute o comando: `npm run test`(exibe a interface de teste do cypress) ou `npm run report`(realiza os testes headless e gera o report dos test)

![alt text](/imagesReadMe/image-1.png)

Utilizando o terminal/Console para os teste de API:
 1. Acessar a pasta postman, via linha de comando ou abrindo o terminal na página

 2. Execute o comando `newman run ContatoSeguro.postman_collection.json -e contatoSeguro.postman_environment.json -r htmlextra`


## Gerando report
Para gerar o report no formato exibido na imagem abaixo. Insira os seguites comandos no terminal:

1. npx mochawesome-merge "cypress/results/*.json" > mochawesome.json

2. npx marge mochawesome.json
![alt text](/imagesReadMe/prettyReport.png)

Referência utilizada: https://docs.cypress.io/guides/tooling/reporters#Reporter-Options

## Autora :princess:

- Karina Yamashita 

