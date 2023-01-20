# Server

NLW Setup | Rocketseat Trilha Ignite

## 🚀 Começando

Você pode optar em baixar o server sem precisarmos codar juntos,porém é necessário ter o  * [Node](https://nodejs.org/en/) - Node_v18.13.0 lts,diante disso segue os comando necessarios para instalar as dependência. 

Comando para instalar as Dependência necessárias.
```
npm install <-- atualizando pacote.
```

Iniciando servidor local.
```
npm run dev 
```

### 📋 Pré-requisitos

Um breve conhecimento em javacript  e typescript.

Ter um editor de código de sua preferência.

Ter Instalado o node.js  na versão mais instável .


## 📑  Codando Juntos

Criar uma pasta server

Instalações das  dependências [`🔧 Instalação`](#instalação)

Configuraçoes dos  arquivos [`⚙️ tsconfig.json e  Package.json configurações`](#tsconfig.json-e-Package.json-configurações)

Criar pasta src.

Criando arquivo server.ts dentro da pasta src. 

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

model HabitWeekDays{
  id String @id @default(uuid())
  

  habit_id String
  week_day Int

  @@unique([habit_id, week_day])
  @@map("habit_week_days")
}

model Day{
  id String @id @default(uuid())
  date DateTime


  @@unique([date])
  @@map("days")
}


model DayHabit{
  id String @id @default(uuid())

  day_id String
  habit_id String


  @@unique([day_id,habit_id])
  @@map("day_habits")
}
```

Comando para atualizar banco de dado, atualizando ramificação do dados.
```
npx prisma migrate dev
```
![migrates](https://user-images.githubusercontent.com/70242165/213725404-54b99284-0b84-46cd-bdb1-7db85af66597.png)

Preenchedo tabela do  Banco de Dado direto no Navegador.

```
--> terminal 
npx prisma studio
```
![imgdatabaseindex](https://user-images.githubusercontent.com/70242165/213721201-e327b7f9-c369-43e4-993b-e14ff63fcd88.png)

Para quem deseja visualizar seu banco de dado em forma de diagrama pode usar o código abaixo .

```
npm i -D prisma-erd-generator @mermaid-js/mermaid-cli
```
Adiciona a linha abaixo no schema.prisma

```
generator erd {
  provider = "prisma-erd-generator"
}
-----> Opcional linha 8 a 10 <-----
```
Iniciar Generator

```
$ npx prisma generate

Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma

✔ Generated Prisma Client (4.9.0 | library) to .\node_modules\@prisma\client in 338ms

✔ Generated Entity-relationship-diagram (1.2.5) to .\prisma\ERD.svg in 6.49s
You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
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
