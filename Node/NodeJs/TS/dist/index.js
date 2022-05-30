"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importação de bibliotecas (libs)
// Quando usa (*) importa tudo da biblioteca 'xpto' como uma variavel (as) http
// se quiser importar só uma classe colocar a {classe} ao invés de todas (*)
const query_string_1 = require("query-string");
const url = __importStar(require("url"));
const fs = __importStar(require("fs")); //Na aula ele importou só o writefile mas o exercício vou importar as outras funções
const http_1 = require("http");
//Definição de porta
const port = 5000;
const server = (0, http_1.createServer)((request, response) => {
    //Implementar código aqui
    let resposta;
    const urlparse = url.parse(request.url ? request.url : '', true);
    //Receber infos do usuario
    const params = (0, query_string_1.parse)(urlparse.search ? urlparse.search : '');
    //Criar um usuario & Atualizar um usuario
    if (urlparse.pathname == '/criar-usuario') {
        //Salvar as infos
        fs.writeFile(`users/${params.id}.txt`, JSON.stringify(params), function (err) {
            if (err)
                throw err;
        });
        resposta = 'usuario criado com sucesso!';
        console.log(`usuario ${params.id} criado/atualizado`);
        response.statusCode = 201;
        response.setHeader('Content-Type', 'text/plain');
        response.end(resposta);
    }
    response.end('Helo Luiz!'); //Na aula houve o problema de assincronissidade do JS
});
//Execução
server.listen(port, () => {
    console.log(`server running on port  localhost:${port}`);
});
