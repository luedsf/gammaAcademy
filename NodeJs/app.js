//Inclui bilioteca 
const http = require('http');

const url = require('url'); //biblioteca da url do site https://www.npmjs.com/package/url

const queryString = require('query-string');

//definição de endereo/URL
const hostname = '127.0.0.1'; // 127.0.0.1 = localhost
const port = 3000;


//implementação da regra de negócio
const server = http.createServer((req, res) => {

// Pegarapergunta na url
//console.log(req.url); // desse mode a info ainda esta codificada (parse) -> usamos query string para "decodificar"
const params = queryString.parse(url.parse(req.url, true).search);
// console.log(params); 

// Verificar a pergunta e escolher uma resposta
let resposta;
if (params.pergunta == 'melhor-filme') {
  //console.log('Star Wars!!!!');
  resposta = 'Star Wars!!!!';
} 
else if (params.pergunta == 'melhor-tecnologia-backend') {
  // console.log('nodejs');
  resposta = 'nodejs';
} 

else {
  // console.log('Errrrrrouuuu!!!!!!!!!');
  resposta = 'Errrrrrouuuu!!!!!!!!!';
}// aparece duas resposta por causa do favico que não corresponde a pergunta!

// Retornararesposta escolhida


  res.statusCode = 200; // status do http - 404 : erro!
  res.setHeader('Content-Type', 'text/plain'); // é o header que define o que terá no conteúdo e os padrões conforme aula de GraphQL
  res.end(resposta); //Final é o corpo do texto
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});