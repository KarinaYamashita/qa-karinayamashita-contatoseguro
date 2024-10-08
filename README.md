# [QA] Teste técnico Contato Seguro - Karina Yamashita :clipboard:

Esse repositório contém uma aplicação para testes e2e, do fluxo de CRUD do usuário na tela de cadastro, para o teste técnico da empresa Contato Seguro. A automação dos testes foi realizada utilizando como linguagem de programação Javascript e POM( page Object Model).

## Estrutura

Para o desenvolvimento deste projeto a estrutura de diretórios é:

- support/data: diretório responsável por armazenar os arquivos dos objetos dos dados no cadastro do usuário e dos textos exibidos na tela ou mensagens de retorno.
- support/elements: diretório responsável por armazenar os arquivos dos objetos que contém o mapeamento dos elementos da aplicação.

- support/pageObjects: diretório que contém as classes, nas quais são armazenados os métodos e asserções empregados.

- e2e: diretório responsável por armazenar os arquivos de testes para cada uma das funcionalidades testadas.

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

## Gerando report
Para gerar o report no formato exibido na imagem abaixo. Insira os seguites comandos no terminal:
1. npm i mochawesome-merge

2. npx mochawesome-merge "cypress/results/*.json" > mochawesome.json

3. npx marge mochawesome.json

![alt text](/imagesReadMe/prettyReport.png)

Referência utilizada: https://docs.cypress.io/guides/tooling/reporters#Reporter-Options

## Autora :princess:

- Karina Yamashita 

