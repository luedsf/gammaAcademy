# Node.JS - Criando uma REST API

## REST API: Definição

`API: Application Programing Interface [Aplicação de Interface de programação]`

* API permite a integração entre diferentes sistemas padronizando o fluxo de dados (requisoções, forma de envio e recebimento de info, protocolo de codificação de mensagens)

> Uma ponte ou interlocutor entre aplicações diferentes.

* REST é um conjunto de convenções arquiteturais que utiliza algumas camadas do HTTP para envio e recebimento de infos.

## RESTful: Definição

* É um sistema que segue ***todas*** as boas práticas do estilo de arquitetura REST, seguindo os padrões de definição:  
    
    * Recrusos;
    * status de resposta;
    * cache;
    * codificação de dados;
    * forma de envio e recebimento;
    * entre outros (etc.);

> RESTful foca no consumidor ***(DESENVOLVEDOR)***

`exemplos de REST APIs:`  

* [YouTube](https://developers.google.com/youtube/v3)
* [Instagram (Graph API)](https://developers.facebook.com/docs/instagram-api/)
* [Any API](https://any-api.com/)


### Recursos: Coleções / Elementos / Subelementos

**Recursos:** É tudo aquilo que será utilizado em seu sistema para requisitar ou apresentar os dados, e consequentemente tudo que será inserido nas coleções e elementos. 

`No exemplo de um site de notícia, os jornalistas, as categorias e as notícias, todos são os recursos para segmentar a gestão da aplicação.`

**Coleção:** É o conjunto de elementos, uma "*lista*" contendo os elementos 

**Elemento:** É um item dentro de sua coleção.

**Subelemento:** Quando começamos a aumentar a complexidade e os níveis de organização dos dados, conforme decemos o nível dos elementos o nível mais baixo se torna um subelemento.

`voltando ao exemplo do site de notícias: as categorias são COLEÇÕES, as notícias de esporte são ELEMNETOS e a notícia específica é o SUBELEMENTO.`

### ENDPOINTS

> É o endereço do recurso, ou seja, o local (ponto final) onde se concentra toda a informação do recurso (elemento/subelemento) buscada.  

Exemplo:

`protocolo://dominio/nome-da-api/versao/recurso`

```
https://mail.google.com/mail/u/1/#inbox
```

## Métodos (verbos) REST

 Met/Verb | CRUD | Envio | Recebimento  |Descrição
-|-|-|-|-
Post|Create|Paramentros via Corpo|Info no corpo da resp|Criação de registro, envia infos
Get|Read|Paramentros via URL|Info no corpo da resp|Consulta de registros, busca infos
PUT|Update|Paramentros via URL|Info no corpo da resp|atualização completa do registro, envia info
Delete|Delete|Paramentros via URL|Info no corpo da resp|apagaga o registro, envia info
Patch|-|Paramentros via URL e Corpo|Info no corpo da resp|atualização parcial do registro, envia info
Option|-|Paramentros via URL|Info no cabeçalho da resp|verifica os métodos permitidos, busca info
Head|-|Paramentros via URL|Info no cabeçalho da resp|consulta cabeçalho dos registros, busca info
|

> A requisição tem 3 partes: URL, Header e o Body (json)  
> A resposta tem 2 partes: Header e o Body (json)

como usar os métodos:  
`[metodo]url/endpoint`

detalhe:  
`url/endpoint?_offset=50$_limit=25`  
tudo após o '?' são parâmetros de pesquisa

## Versionamento de API

> Manter as duas API temporariamente e faz a sugestão para o Cliente migrar da v1 para a v2.

## Status CODES

|Codes|Status|
-|-
1xx|informação
2xx|sucesso
3xx|redirecionamento
4xx|erro no cliente
5xx|erro no servidor
|

## Documentação

[RESTful API](https://restfulapi.net/)  
[Swagger.io](https://swagger.io/)  
[mdn web docs](https://developer.mozilla.org/pt-BR/docs/Web/HTTP)  

## DX = Develop(er) Experience  

No RESTful: (SDK - Software Development Kit)

* API Developers portal - [exemplo](https://developers.mercadolivre.co)
* Documentação Interativa - [exemplo](https://docs.pagar.me/reference/obter-cliente-1)
* Sandbox e playground
* Getting Started
* Sign-up e Tokens automáticos
* Comunicação eficiente (hackatons, meetups etc)
* Exemplo de codigos na linguagem do desenvolvedor

## SWAGGER

> É uma ***Aplicação Open Source*** que auxilia **devs** nos processos de criação, definição, documentação e consumo de APIs REST.

Swagger é uma **linguagem de descrição** de interface para descrever APIs RESTful expressa usando **JSON**. É usando junto com um conjunto de ferramentas de software de código aberto para projetra, construir documentar e usar serviços da Web RESTful. o Swagger inclui **documentação automatizada, geração de código e geração de casos de teste**.  


### Hands-on

[Swagger live demo](https://editor.swagger.io/)

`mantendo a documentação original e editando ou adicionando as coisas da aula`

> Swagger é escrito em uma linguagem chamada YAML

`O objeto JSON é escrito em um array com objetos dentro dele. Conforme exemplo abaixo:`

```
[
    {
        "catId": "1",
        "nome": "esportes"
    },
    {
        "notId": "2",
        "titulo": "rugby",
        "conteudo": "Six Nations no BR"
    }
]
```
`´só objetos não teriamos os [] fechando os objetos nas {}`

<br>

## Documentação referência - SWAGGER

[Swagger.io](https://swagger.io/)  
[Swagger live demo](https://editor.swagger.io/)  
[Swagger docs](https://swagger.io/docs/)  

## EXPRESS

Utilidade de framework:
1. Implementar tratamento de **métodos** (get, post, put etc.);
2. Implementar tratamento de **status code** (1xx, 2xx,4xx etc.);
3. Implementar **protocolo de comunicação**;
4. Implementar funcionalidade de **filtros** e de **parâmetros**;
5. Implementar **regras de negócio específicas** do projeto.

1-4: Podem ser feitos com o uso de `Frameworks` para agilizar a aumetar a produtividade

***FRAMEWORKS:*** Pacote de códigos prontos que podem ser utilizaods no desenvolvimento de sistemas. A proposta do uso dessas ferramentas é aplicar funcionalidades, comandos e estruturas já prontas para garantir a qualidade e produtividade no projeto. 

**EXPRESS:** é um *framework* para aplicativo da web do Node.js mínimo e flexível que fornece um cojunto robusto de recursos para app web e móvel.

|Regras de negócio|
|-
|ExpressJS
|JS
|Node.JS|  
<br>

### Postman

<br>  

> O Postman é um aplicativo com a função de testar e desenvolver APIs em uma interface bastante simples e intuitiva. Ele nos permite simular requisições HTTP de forma rápida, armazenando-as para que possamos usá-las posteriormente.  
> Além disso, para cada requisição feita, o Postman analisa as respostas enviadas pela API e as exibe visualmente de forma muito agradável e fácil de entender, o que reduz consideravelmente o tempo necessário para o desenvolvimento e testes de sua aplicação.

<br>

[Postman](https://www.postman.com/)  
[Web Postman](https://www.postman.com/downloads/)  


> Utilizando MySQL Workbench:  
[MySQL](https://www.mysql.com/) 
[MySQL Workbench](https://www.mysql.com/products/workbench/)  
[MySQL Workbench - doc](https://dev.mysql.com/doc/workbench/en/)  
[MySQL Workbench - download](https://dev.mysql.com/downloads/workbench/)  

<br>

`Comando para iniciar projeto node e cria o package.json solitando informações no prompt de comando`
```
npm init
```
`Comando para iniciar projeto node e cria o package.json automaticamente` 
```
npm init -y
```
`Instalação do express`
```
npm i express --save
```

[Express (BR)](https://expressjs.com/pt-br/)

`rodar arquivo com node`
```
node index.js
```

> **O método GET é realizado quando damos ENTER no navegador, demais métodos fazemos via o Postman**

> *Ao criar o localhost com o Node.Js conseguimos usar os metodos via Postman!*


#### MVC - Model , View, Controller *** (não abordou na aula)

<br>

`Instalação do pacote MySQL 2 que tem maior compatibilidade`
```
npm install mysql
```

[Exemplo de implementação do código](https://expressjs.com/pt-br/guide/database-integration.html#mysql)
```
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();
```

#### Documentação de referencia:
  
[Express](https://expressjs.com/)  

## ***Segurança***
### ***Acesso não autorizado***

> Quando o atacante se faz passar por um usuário do sistema

|Problemas|Como tratar|
|-|-|
|Acesso não autorizado|Autenticação (***OAuth2***)
|Ataque de força bruta|Bloqueio de IP/Usuário, MFA*, Rate limiting etc.
|Roubo de credencial|Padrões seguros de senha, MFA*, processos seguros de gerenciamento de credenciais etc.
|Roubo de sessão (*session hijacking*)|SSL, expiração de sessão, reconhecimento de pradões etc.
|

**MFA** = Multi-Factor Authentication

### ***Ataques de integridade***

> Quando o atacante consegue dados através da API sem se passar por um usuário por falha integridade da API

|Problemas|Como tratar|
|-|-|
|Injection (SQL, XML, JSON)| filtros em todos os dados recebidos
|Cross-site (XSS)|filtros especializados nos dados recebidos, encodar os dados enviados, utilização adequada de headers, CSO
|Request Forgery (XSRF)|Anti-CSRF Token, SameSite Flag
|

### ***Sobrecarga***

> Atacante sobrecarrega de requisições o sistema para "derrubar" os sitema.

|Problemas|O que é|Como tratar|
|-|-|-|
|DDoS|variando proxys ou servidores|negação de serviço, bloqueio de IP, ferramentas de IA
|Buffer Overflow|parâmetros muito grandes|canaries, bounds checking, tagging
|Injection (SQL, XML, JSON)|manda parâmetros sequenciais até derrubar o serviço|filtros em todos os dados recebidos
|

### ***Confidencialidade***

> O invasor ataca o canal de comunicação entre o usuário e a API (client/server)

|Problemas|O que é|Como tratar|
|-|-|-|
|Information Disclosure|sistema "oferece" mais info do que deveria|design patterns, quality assurance, cuidado na implementação
|Man-in-hte-middle|Interceptação dos dados|SSL/https, VPN, monitoramento, firewall etc
|Network Eavesdropping|verifica dados corrompidos para roubar infos e invadir o sistema|SSL/https, VPN, monitoramento, firewall etc
|Data Scraping|busca automatizada de infos para juntar infos relevantes|rate limiting, bloqueio de IP/usuário, monitoramento de padrões de acesso
|

### ***Implementações equivocadas***

<br>

**Problemas:** _Tratamentos_  
* __Repudiação:__ *auditoria, LOGs, registros*
* __Compliance:__ *implementação de padrões de segurança como PCI-DSS e HIPAA*  