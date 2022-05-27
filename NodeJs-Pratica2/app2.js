//npm i live-reload

const http = require('http'); // modulo padrão já instalado quando instala node
const queryString = require('query-string'); // npm i query-string
const url = require('url'); // npm i url - modulo padrão já instalado quando instala node (não tem problema reinstalar)
const fs = require('fs'); // https://www.w3schools.com/nodejs/nodejs_filesystem.asp

let resposta;


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const urlparse = url.parse(req.url, true);

    //Receber infos do usuario
    const params = queryString.parse(urlparse.search); // urlparse.search pega a parte após o'?'

    //Criar um usuario & Atualizar um usuario

    if(urlparse.pathname == '/criar-usuario') { // urlparse.pathname pega a parte antes do'?'
        
        
        //Salvar as infos
        fs.writeFile(`users/${params.id}.txt`, JSON.stringify(params), function (err) {
            if (err) throw err;
            });

        resposta = 'usuario criado com sucesso!'
        console.log(`usuario ${params.id} criado/atualizado`);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
    } 
    //Buscar um usuario
    else if (urlparse.pathname == '/selecionar-usuario') {
        fs.readFile(`users/${params.id}.txt`, function(err, data) {
            resposta = data;
            console.log(`usuario ${params.id} encontrato`);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(resposta);
        });
    }
    //Remover um usuario
    else if (urlparse.pathname == '/remover-usuario') {
        fs.unlink(`users/${params.id}.txt`, function(err) {

            resposta = err ? "usuario nao encontrado" : 'usuario removido com sucesso!';
            
            console.log(`usuario ${params.id} removido`);
            
            res.statusCode = 204;
            res.setHeader('Content-Type', 'text/plain');
            res.end(resposta);
        });
    }

  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});