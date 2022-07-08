# 🐋 The FullStack Docker Deployment Template
Escrito por: Brenno Araujo
Esse template serve para criar um container docker para quem estiver iniciando nos estudos e analisar o código, modificar e até mesmo utiliza-lo para deploy em algum cloud service (AWS, Google Cloud...).
## 🧐 O que ele tem?
 - Node Express App
 - ReactJS App (Create React App)
 - Postgres Docker container
 
Todos os containers usam a versão do Alpine Linux, garantindo leveza e segurança no App, disponibilizando somente o necessário para o programa rodar.
Você pode alterar este template conforme sua necessidade.

## 🖥️ Desenvolvimento
Você pode alterar o arquivo **docker-compose.yml** e [adicionar volumes](https://docs.docker.com/storage/volumes/#use-a-volume-with-docker-compose) e tornar este template em um ambiente de desenvolvimento.
Exemplo:
```yml
server:
  build: ./back/
  command: yarn start
  ports:
    - "3003:3003"
  volumes:
    - back:/usr/server
```
Assim toda alteração na pasta `back` irá para a pasta `/usr/server` do containter (Lembre-se: caso você não queira que uma pasta seja adicionada, coloque ela no arquivo `.dockerignore`)

## 🥷 Variáveis de ambiente (ENV)
Você não precisa guardar suas variáveis de ambiente num arquivo .env quando estiver em produção. Podendo adiciona-las via container (pelo docker-**compose.yml**)
Exemplo:
```yml
server:
  build: ./back/
  command: yarn start
  ports:
    - "3003:3003"
  evoriment:
    - JWT_TOKEN=TOKEN
```
[Leia mais](https://docs.docker.com/compose/environment-variables/#set-environment-variables-in-containers)

## 📥 Pull Requests
Sempre são bem-vindas! :)
