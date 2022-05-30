# Aulas de NODE
> - **Objetivos**
>   - _Noções de Node_ 
>   - _Noções de NPM_ 
>   - _Noções de JS (JavaScrip)_ 
>   - _Noções de TS (TypeScript)_

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

## **_Servidor x Cliente:_**

>|CLIENTE|SERVIDOR|
>|-|-|
>|Agente ativo é o cliente não o servidor|Agenete passivo do processo|
>|Envia requisições/pedidos|Somente responde requisições/pedidos|
>|Normalmente não armazena dados|Armazena dados|
>|Tem baixo poder de processamento|Tem grande poder de processamento|
>|Está sob a guarda do cliente|Está sob a governança da empresa|
>|Atendeasomente um cliente|Atendeavários clientes|
>|Menor impacto de segurança|Grande impacto de segurança|

## **_Server side & client Side:_**

>Server : **Banco de dados, e-mail, nuvem, prigrmas de node**

Aplicação Server side são aplicações em que todas as regras de negócio,lógica de programação e tratamento de dados estão do lado do servidor.Oservidor também tem o papel de converteroresultado do processamento em hipertexto(linguagem entendida pelos navegadores,famoso HTML) e a aplicação cliente tem somente o papel de exibir o resultado.

>Client: **aplicativos, programas, navegadores**

* Evolução do client side 

> **_SERVIDOR_** : Responsável pelo gerenciamento dos dados ; Responsável pelas regras de negócio ;
Responsável pela lógica de programação "pesada"; Mais generalista e reaproveitável. 

> **_CLIENTE_** : Responsável pela geração do HTML; Responsável pela lógica de usabilidade;
Responsável pela lógica de programação mais"leve"; Inicialmente mais específico,mas com os frameworks modernos se tornou mais
generalista e reaproveitável; utilizando o JSON (por exemplo).

{ JSON = JavaScript Object Notation }

* O Frontend estaria no lado do Client side  
* O Backend fica no lado do servidor  
* O Fullstack cuida de Front-Backend (extremamente Sr!)   
* O NODE é utilizado na construção das APIs dentro do servidor

Node (ou formalmente Node.js) é um ambiente em tempo de execução open-source (código aberto) e multiplataforma que permite aos desenvolvedores criarem todo tipo de aplicativos e ferramentas do lado servidor (backend) em JavaScript.  
Node é usado fora do contexto de um navegador (ou seja executado diretamente no computador ou no servidor). Como tal, o ambiente omite APIs JavaScript específicas do navegador e adiciona suporte para APIs de sistema operacional mais tradicionais, incluindo bibliotecas de sistemas HTTP e arquivos. 

_fonte [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction)_  <br><br>

>## **COMANDOS:**  

Para parar de rodar o tno erminal servidor NODE no terminal: aparece '^C' no terminal
```
'CtrL+C'
```
**_(2x se não funcionar 1x) - ou fechar o terminal (ou powershell, etc.)_**

<br>

## Documentação de apoio:

- Comunidade e nertwork poderá ajudar bastante.  
- O site do [node](https://nodejs.org/en/) é muito bom por ser a documento oficial.
- O [devdocs.io](https://devdocs.io/node/) serve para varios outros  
- [Stack Overflow](https://stackoverflow.com/)

<br>

## NPM : Pacote de Gerenciamento do Node

>O pacote/módulo permiteocompartilhar de funcionalidades implementadas entre diferentes projetos, pessoas e empresas.

>O NPM é o gerenciador de pacotes do Node permitindo a busca, instalação,gerenciamento, criação e publicação de pacotes.

Website : Busca e análise de pacotes. [site](https://www.npmjs.com/)  
CLI (Command Line Interface) : Comandos de terminal, mais utilizado. [Docs](https://docs.npmjs.com/cli/v8/commands)  
Registry : Local onde ficam armazenados os pacotes. [Registry](https://registry.npmjs.org/)  

## Comandos NPM:

>Para criar um projeto e iniciar o NPM utilizamos o comando:

```
npm init
```

>A criação de um projeto permite gerenciar os pacotes em seu projeto - cria o package.json guardando os dados do projeto e dos pacotes utilizados no projeto  <br><br>

# O JS (JavaScript)  

JavaScriptéuma linguagem de programação que permiteodesenvolvimento de programas frontend, ela é carregada quando uma página web é acessada e o navegador é o responsável pela sua execução. Seu objetivo __inicial__ era dar "vida" às páginas web, tornarofrontend mais "inteligente" e diminuir as interações com o backend/servidor.  

> Isso diminuiu o cosumo da banda do cliente (client)!

### Outras fontes de consultas  

> [MDN](https://developer.mozilla.org/pt-BR/docs/web/javascript)  
> [w3schools](https://www.w3schools.com/nodejs/)  
> [Stack Overflow](https://stackoverflow.com/)  

# O TP (TypeScript)  

> É uma liguagem que é compilada para se transforma em JS podendo rodar em qualquer ambiente que roda JS. Ela também é utilizada para solucionar o problema de tipagem do JS oferecendo funcionalidades de tipagem classica, estatica e interfaces.  

|**_TypeScript_**|**_JavaScript_**|
|--|--|
|1. *Superset* _do Java_;|* Linguagem de prog de scripts;|
|2. **Precisa** __ser compilado__;| - Não precisa ser compilado;|
|3. Possui conceitos como tipos e interfaces;|+ Nâo possui tipos e interfaces;|
|4. Mais recomendado para grandes projetos;|- Gdes projetos podem ser difíceis de gerenciar;|
|5. ~~ignorar~~ |--|

### Outras fontes de consultas

[TSlang](https://www.typescriptlang.org/)

## Comandos Terminal para o TS  

>Inicia projeto

```
npm init
```
```
version: (1.0.0)                                            
description: Projeto teste do TS                            
entry point: (index.js) dist/index.js                 
test command:
git repository:
keywords:
author: luedsf
license: (ISC)
About to write to C:\Users\lesf\projeto-cronos\gammaAcademy\NodeJs\TS\package.json:
```

>Instala TS

```
npm i typescript
```

>Cria o arquivo de configuração do TS

```
npx tsc --init
```

>Compila TS real-time para a pasta/arquivo deinido no  npxtsc --init

```
npx tsc --watch
```

>Instala pacotes de complementos para node no TS

```
npm install @types/node
```

>Instala o query-String para TS após o types
```
npm i query-string
```

## Configuração do  o TSconfig.json  
<br>

```
"rootDir": "./",

"outDir": "./dist/",
```