# Aulas de NODE
> - Objetivos
<i>
>   - Noções de Node 
>   - Noções de NPM 
>   - Noções de JS (JavaScrip) 
>   - Noções de TS (TypeScript)
</i>

<a>
Expectativas:

- Aprenderadefiniroqueébackend/frontend;
- AprenderadefiniroqueéoNodeequal sua utilidade;
- AprenderadefiniroqueéoNPMequal sua utilidade;
- Executar meu primeiro programa em Node;
- Codificar um programa básico em Node/JavaScript;
- Codificar um programa básico em Node/TypeScript;
- Conhecer algumas documentações básicas para resolução de problemas;

</a>


<b>$  Servidor x Cliente: $ </b>

>CLIENTE

- Agente ativo é o cliente não o servidor (agente passivo)

- Envia requisições/pedidos

- Normalmente não armazena dados

- Tem baixo poder de processamento
- Está sobaguarda do cliente

- Atendeasomente um cliente

- Menor impacto de segurança

>SERVIDOR

- Agenete passivo do processo

- Somente responde requisições/pedidos

- Armazena dados

- Tem grande poder de processamento

- Está sob a governança da empresa

- Atendeavários clientes

- Grande impacto de segurança

Server side & client Side:

Server : <b> Banco de dados, e-mail, nuvem, prigrmas de node </b>

Aplicação Server side são aplicações em que todas as regras de negócio,lógica de programação e tratamento de dados estão do lado do servidor.Oservidor também tem o papel de converteroresultado do processamento em hipertexto(linguagem entendida pelos navegadores,famoso HTML) e a aplicação cliente tem somente o papel de exibir o resultado.

Client: <b> aplicativos, programas, navegadores </b>

* Evolução do client side 

SERVIDOR : Responsável pelo gerenciamento dos dados ; Responsável pelas regras de negócio ;
Responsável pela lógica de programação "pesada"; Mais generalista e reaproveitável. 

CLIENTE : Responsável pela geração do HTML; Responsável pela lógica de usabilidade;
Responsável pela lógica de programação mais"leve"; Inicialmente mais específico,mas com os frameworks modernos se tornou mais
generalista e reaproveitável; utilizando o JSON (por exemplo).

{ JSON = JavaScript Object Notation }

>O Frontend estaria no lado do Client side <br> 
O Backend fica no lado do servidor  
O Fullstack cuida de Front-Backend (extremamente Sr!)   
O NODE é utilizado na construção das APIs dentro do servidor

> Node (ou formalmente Node.js) é um ambiente em tempo de execução open-source (código aberto) e multiplataforma que permite aos desenvolvedores criarem todo tipo de aplicativos e ferramentas do lado servidor (backend) em JavaScript.  Node é usado fora do contexto de um navegador (ou seja executado diretamente no computador ou no servidor). Como tal, o ambiente omite APIs JavaScript específicas do navegador e adiciona suporte para APIs de sistema operacional mais tradicionais, incluindo bibliotecas de sistemas HTTP e arquivos. 

<i>(fonte MDN Web Docs: https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction)</i>

> COMANDOS:
Para parar de rodar o servidor NODE no terminal:
```
'CtrL+C'
```
**_(2x se não funcionar 1x) - ou fechar o terminal (ou powershell, etc.)_**

<br>

<h2>Documentação de apoio:</h2>

- Comunidade e nertwork poderá ajudar bastante.  
- O site do [node](https://nodejs.org/en/) é muito bom por ser a documento oficial.
- O [devdocs.io](https://devdocs.io/node/) serve para varios outros  
- [Stack Overflow](https://stackoverflow.com/)

<br>

<h2> NPM : Pacote de Gerenciamento do Node </h2>

>O pacote/módulo permiteocompartilhar de funcionalidades implementadas entre diferentes projetos, pessoas e empresas.

>O NPM é o gerenciador de pacotes do Node permitindo a busca, instalação,gerenciamento, criação e publicação de pacotes.

Website : Busca e análise de pacotes. [site](https://www.npmjs.com/)  
CLI (Command Line Interface) : Comandos de terminal, mais utilizado. [Docs](https://docs.npmjs.com/cli/v8/commands)  
Registry : Local onde ficam armazenados os pacotes. [Registry](https://registry.npmjs.org/)  

<h2> Comandos NPM: </h2><br>

>Para criar um projeto e iniciar o NPM utilizamos o comando:

```
npm start
```

>A criação de um projeto permite gerenciar os pacotes em seu projeto - cria o package.json guardando os dados do projeto e dos pacotes utilizados no projeto  <br><br>

<h1> O JS (JavaScript) </h1>  

JavaScriptéuma linguagem de programação que permiteodesenvolvimento de programas frontend, ela é carregada quando uma página web é acessada e o navegador é o responsável pela sua execução. Seu objetivo <b>inicial</b> era dar "vida" às páginas web, tornarofrontend mais "inteligente" e diminuir as interações com o backend/servidor.  

> Isso diminuiu o cosumo da banda do cliente (client)!

<h3> Outras fontes de consultas </h3>  

> [MDN](https://developer.mozilla.org/pt-BR/docs/web/javascript)  
> [w3schools](https://www.w3schools.com/nodejs/)  
> [Stack Overflow](https://stackoverflow.com/)  

<h1> O TP (TypeScript) </h1>  

> É uma liguagem que é compilada para se transforma em JS podendo rodar em qualquer ambiente que roda JS. Ela também é utilizada para solucionar o problema de tipagem do JS oferecendo funcionalidades de tipagem classica, estatica e interfaces.  

**_TypeScript_**

1. *Superset* _do Java_;
2. **Precisa** __ser compilado__;
3. Possui conceitos como tipos e interfaces;
5. Mais recomendado para grandes projetos;
6. ~~ignorar~~

**_JavaScript_**

* Linguagem de prog de scripts;
- Não precisa ser compilado;
+ Nâo possui tipos e interfaces;
- Gdes projetos podem ser difíceis de gerenciar;


<h3> Outras fontes de consultas </h3>

[TSlang](https://www.typescriptlang.org/)