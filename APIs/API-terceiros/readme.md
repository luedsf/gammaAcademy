# Consumo de API terceiras
## Node-Fetch
`É uma biblioteca de integração do Node`  

[NPM](https://www.npmjs.com/package/node-fetch)  
[Artigo Alura](https://www.alura.com.br/artigos/revolucao-node-js-adeus-axios-fetch-api-versao-17-5-0)  
[MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)  

> É um/a pacote/biblioteca que nos auxilia na hora de se comuinicar com as **APIs externas** ao nosso projeto, trazendo a **base** necessária para **realizar reaquisições** prontas e permitindo que nos concentremos mais nas regras de negócios.

[Difference between a module, library and a framework](https://stackoverflow.com/questions/4099975/difference-between-a-module-library-and-a-framework)

* __Biblioteca [library]__ : Coleção de funcionalidades relacionadas (pacotes e módulos);
* __Framework__ : Inversão de controle (em relação a bibliotecas);
* __Pacotes [packages]__ : conjunto de módulos e apicações;
* __Módulo [module]__ : Interface abstrata com importação/exportação explicita, implementação (aplicações) e interface são separadas, pode haver múltiplas implementações e as implementações são ocultas;
* __Aplicações [applications]__ : são as aplicações, conjunto de funções, métodos, códigos armazenados em um arquivo para serem complilados;

`Comando para instalação via NPM`
```
npm i node-fetch
```

### Comandos utilizados no Hands-on:

`exemplo de integração de API da aula com Node-Fetch`
[cielo api doc](https://developercielo.github.io/manual/cielo-ecommerce)

[Gerador de aplicativos do Express](https://expressjs.com/pt-br/starter/generator.html)
```
npm init -y
npm install express-generator -g
npm install
set DEBUG=myapp:* & npm start
```
> Usando Postman para fazer as requisições e leituras.

## Axios

`É uma Biblioteca cliente HTTP baseada em promisses, 100% de terceiro e possui recursos mais avançados que o Node-Fetch: proteção XSRFm transformação automática de dados JSON, canelamento de requisições, itenreceptação e mais...`

[Axios](https://axios-http.com/ptbr/docs/intro)  
[GitHub](https://github.com/axios/axios)  
[NPM](https://www.npmjs.com/package/axios)  

`Comando de instalação via NPM`
```
npm i axios
```

### Comandos utilizados no Hands-on:

`exemplo de integração de API da aula com Axios`
[Pagar.me Docs](https://docs.pagar.me)  
[Pagar.me Guias](https://docs.pagar.me/page/guias-pagarme)  
[4devs](https://www.4devs.com.br)  

> Os sites parecem estar desatualizados em relação a aula. Talvez precise ter um login feito para acessar algumas infos.

`Continuamos utilizando a mesma aplicação feita com o Node-Fetch!`
```
npm i axios
set DEBUG=myapp:* & npm start
```

> Usando Postman para fazer as requisições e leituras.
> Sandbox/Playgrounds são os ambientes de testes
