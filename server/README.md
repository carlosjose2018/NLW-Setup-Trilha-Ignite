# Server

NLW Setup | Rocketseat Trilha Ignite

## 🚀 Começando

Configuração do server Trilha Ignite.

Consulte **[Construído com](#-Construído-com)** para saber as tecnologia ultilizadas no projeto.

### 📋 Pré-requisitos

Um breve conhecimento em javacript  e typescript.
Ter um editor de codigo.
Ter Instalado o node.js  na versão mais instável .

### 🔧 Instalação

Instalar o package.json responsável por guardar informações, scripts e controle de versionamento de bibliotecas do projetos.

```
npm  init -y  
```

O Fastify é uma estrutura da web altamente focada em fornecer a melhor experiência de desenvolvedor com a arquitetura de plug-in menos aérea e poderosa, inspirada no Hapi e no Express. Até onde sabemos, é uma das estruturas da web mais rápidas da cidade.

```
 npm install fastify 
```

Instação Typescript para usar no desenvolvimento do projeto.
```
 npm install typescript -D 
```

Executar tsc --init para criar um arquivo tsconfig.json
```
npx tsc --init
```
tsx é um comando CLI ( alternativo a node) para executar perfeitamente o TypeScript & ESM, em ambos commonjs & module tipos de embalagem.
```
npm i tsx -D
```

Prisma desbloqueia um novo nível de experiência de desenvolvedor ao trabalhar com bancos de dados graças ao seu modelo de dados intuitivo, migrações automatizadas, segurança de tipo & conclusão automática.
```
npm i -D prisma
```

O Prisma Client JS é um construtor de consultas gerado automaticamente que permite o acesso seguro ao banco de dados e reduz o clichê. Você pode usá-lo como uma alternativa aos ORMs tradicionais, como Sequelize, TypeORM ou construtores de consultas SQL, como knex.js
```
npm i @prisma/client
```

Isso cria um novo diretório prisma com seu arquivo de esquema Prisma e configura o SQLite como seu banco de dados.
```
 npx prisma init --datasource-provider SQLite
```
@fastify/cors permite o uso de CORS em um aplicativo Fastify.
```
 npm i @fastify/cors
```
## ⚙️ tsconfig.json e  Package.json configurações.

### 🔩 tsconfig.json

Antes
```
 "target": "es2016",  
```
Depois 
```
"target": "es2020",  
```

### 🔩 package.json

Antes
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
Depois 
```
 "scripts": {
    "dev": "tsx watch src/server.ts"
  },
```

### ⌨️ testes de estilo de codificação

Depois do tsx instalado e configurações do package.json realizado server pronto para uso .

```
npm run dev
```

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - O framework web usado
* [Maven](https://maven.apache.org/) - Gerente de Dependência
* [ROME](https://rometools.github.io/rome/) - Usada para gerar RSS

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)
* **Fulano De Tal** - *Documentação* - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Um agradecimento publicamente 🫂;
* etc.


---
⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊
