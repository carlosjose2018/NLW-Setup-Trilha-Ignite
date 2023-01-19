# Server

NLW Setup | Rocketseat Trilha Ignite

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

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
    "dev": "tsx src/server.ts"
  },
```
### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
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