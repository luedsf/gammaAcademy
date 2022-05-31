# Semana 5 | Aula Node.JS - HTTP GET e HTTP POST

> repositorio do professor [GitHub](https://github.com/mrdouglasmorais/sistemadeagendamento.git)
## **_Comandos_**

### REST e SOAP
```
npm init -y
npm i express
node src/server.js
```

### com Nodemon
```
npm sucrase -d
npm nodemon -d
npm run dev
```

### Doccker
Faz o download do [Docker](https://www.docker.com/) e realiza instalação

```
docker -v
docker run --name darabese -e POSTGRESPASSWORD=docker -p 5432:5432 -d postgressql
docker image ls
docker start postgres ou 'id de image'
```
>É uma banco de dados, mas ele não é compatível com windows nativamente e precisa instalar instancias linux e mexer com o kernel do Win.  
Por isso na aula não estamos usando o Docker e vamos usar os recursos a seguir

### ElephantSQL e PostBird
[ElephantSQL](https://www.elephantsql.com/) : tem planos gratuitos  

API Key : 81aeca9d-9682-4dfc-9ba6-e6151766529f
URL : postgres://jgblwxhn:j-6q-yOfSU5F3YiX_nxL_CF_ThdmwKZZ@castor.db.elephantsql.com/jgblwxhn
Password : j-6q-yOfSU5F3YiX_nxL_CF_ThdmwKZZ
[PostBird](https://www.electronjs.org/apps/postbird) : esse é instalado  

Servem para criar bancos de dados

### ORM (Object relational Mapping)
Serve para mapeamento de objetos como entidades nos bancos de dados.

```
npm i sequelize
npm install --save-dev sequelize-cli
npm i pg pg-hstore
```

### Migration usuário
>__NPM__ não da suporte para o CLI do Sequelize, temos de usar o __NPX__
```
npx sequelize migration:create --name=create-users
```
> <a> por algum motivo não rodou esse comando na minha máquina </a>
```
npx sequelize db:migrate
```
>// para essa operalção é necessário já ter cirado o DB no Postbird linkado com o ElephantSQL
```
npx sequelize db:migrate:undo
```
>// para desfazer a tabela do DB
```
npx sequelize db:migrate:undoAll
```
>// desfaz todo o DB

### Model usuários
É usada para acessar infos dos BDs via API Rest
>como criamos no package.json um comando dev para startar a aplicação:
```
npm run dev
```

### Controller usuários
Extensão [Thunder Client](https://www.thunderclient.com/) p/ VScode para simular requisições ao localhost (já instalado)

### Hashde senhas usuários
```
npm i bcriptjs
```
>ajuda na criação de hash para armazenar senhas nos BDs

### Autenticação JWT

>É uma metodologia para autentificação de usuários dentro do RESTful  
[JSON Web Tokens](https://jwt.io/)  

```
npm i jsonwebtoken
```

>*sites para ciração de hashes:*  
[emn178](https://emn178.github.io/online-tools/sha256.html)  
[md5.cz](http://www.md5.cz/)  
[md5online.org](https://www.md5online.org/)  

### Adicionando foto do usuário
>para remover pacotes
```
rm yarn lock
```

```
npm i multer
```

### Vinculando fotos ao usuário
>Quando criamos tabelas/Banco_de_Dado é importante não alterarmos as configurações depois de cria-los para não gerar erro. A melhor forma e criar uma nova tabela com ao BD de fotos e criar colunas com os dados referenciados as tabelas entre si. Por isso criamos duas tabelas, conforme segue:
```
npx sequelize migration:create --name=create-file
npx sequelize db:migrate
```
```
npx sequelize migration:create --name=create-pick-userphotos
npx sequelize db:migrate
```
> O comando **npx sequelize db:migrate** serve para atualizar (migrar) as configurações tabela conforme código.  
O comando __npx sequelize migration:create --name=create__ serve para criar o arquivo xxx.js dentro da pasta **_ ` ./src/database/migrations/xxxx.js ` _**  

### `Models de agendamento`

```
npx sequelize migration:create --name=create-apointments
npx sequelize db:migrate
```

No arquivo JSON:

`
{
  "collaborador_id": 3,
   "date": "2021-06-21T12:13:13-03:00"
}
`

>o final do argumento "date" é "-03:00" que é o 'time-zone' do Brazil para acertar a hora no BD.


### Validações e listagem de agendamentos

```
yarn add date-fns
```

### Paginação e Listagem de agenda do colaborador

Quando existe muitos retornos precisamos trabalhar a paginação para facilitar a apresentação de dados.

>Não é possível ter mais de um método **`index`** dentro de um cotroller

