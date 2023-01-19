# Server

NLW Setup | Rocketseat Trilha Ignite

## 🚀 Começando

Você pode optar em baixar o server sem precisarmos codar juntos,porém será necessário ter o  * [Node](https://nodejs.org/en/) - Node_v18.13.0 lts,por fim basta dar um "npm run dev" no terminal e acessar o localhost:3333.

### 📋 Pré-requisitos

Um breve conhecimento em javacript  e typescript.

Ter um editor de código de sua preferência.

Ter Instalado o node.js  na versão mais instável .


## 📑  Codando Juntos

Criar uma pasta server

Instalação de  dependência [`🔧 Instalação`](#instalação)

Configurando arquivos [`⚙️ tsconfig.json e  Package.json configurações`](#tsconfig.json-e-Package.json-configurações)

Criar pasta src.

Criando arquivo server.ts 

``` 
              /*Código server.ts */

import Fastify from "fastify";
import cors from "@fastify/cors"
import {PrismaClient} from "@prisma/client"


const app = Fastify();
const prisma = new PrismaClient()

app.register(cors)


app.get('/hello',async () =>{
  const habits = await prisma.habit.findFirst({
    where:{
      title:{
        startsWith:'Beber'
      }
    }
  })
  return habits
})

app.listen({
  port:3333,
}).then(() =>{
  console.log("HTTP Server running!")
})
```
Configurando arquivo Schema.prima

```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Habit{
  id String @id @default(uuid())
  title String
  created_at DateTime

  @@map("habits")
}
```

Preenchedo tabela do  Banco de Dado direto no Navegador.

```
--> terminal 
npx prisma studio
```

Rodar servidor 
```
npm run dev
```

### 🔧 Instalação

Node.js® é um ambiente de tempo de execução JavaScript multiplataforma e de código aberto.
```
Node.exe
```

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

## 🛠️ Construído com
Ferramentas ultilizadas no projeto

* [Node](https://nodejs.org/en/) - Node_v18.13.0 lts
* [fastify](https://www.fastify.io/) 
* [typescript](https://www.typescriptlang.org/) 
* [prisma](https://www.prisma.io/) 

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

"version": "1.0.0",

## ✒️ Autores

Diego Fernandes e Rodrigo Gonçalves
## 📄 Licença

Este projeto foi devenvolvido com proposito didatico pela plataforma de ensino [`rocketseat`](https://www.rocketseat.com.br/). 
## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Um agradecimento publicamente 🫂;
* Gradeciemento para a https://www.rocketseat.com.br/ por desenvolver um belessimo projeto.


---
⌨️ com ❤️ por [carlosajose2018](github.com/carlosjose2018/) 😊
