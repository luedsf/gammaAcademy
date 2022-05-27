// Importação de bibliotecas (libs)
// Quando usa (*) importa tudo da biblioteca 'xpto' como uma variavel (as) http
// se quiser importar só uma classe colocar a {classe} ao invés de todas (*)
import { parse } from 'query-string';
import * as url from 'url';
import * as fs from 'fs'; //Na aula ele importou só o writefile mas o exercício vou importar as outras funções
import { createServer, IncomingMessage, ServerResponse } from 'http';

//Definição de porta
const port = 5000;  

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

    //Implementar código aqui
    let resposta;

    const urlparse = url.parse(request.url ? request.url : '', true);

    //Receber infos do usuario
    const params = parse(urlparse.search ? urlparse.search : '');

    //Criar um usuario & Atualizar um usuario

    if(urlparse.pathname == '/criar-usuario') {

    //Salvar as infos
    fs.writeFile(`users/${params.id}.txt`, JSON.stringify(params), function (err) {
        if (err) throw err;
        });

    resposta = 'usuario criado com sucesso!'
    console.log(`usuario ${params.id} criado/atualizado`);
    response.statusCode = 201;
    response.setHeader('Content-Type', 'text/plain');
    response.end(resposta);
    }
    response.end('Helo Luiz!') //Na aula houve o problema de assincronissidade do JS
    
});

//Execução
server.listen(port, () => {
    console.log(`server running on port  localhost:${port}`);
});