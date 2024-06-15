# Projeto de Gerenciamento de Emblemas (Badges)

Este projeto é uma API desenvolvida em NestJS para gerenciar emblemas (badges) e suas atribuições aos usuários.

## Descrição

O sistema permite criar, listar e atribuir emblemas a usuários registrados. Cada emblema possui um nome único, um identificador único (slug), uma descrição opcional e uma imagem associada. Os usuários podem resgatar emblemas disponíveis e visualizar seus emblemas adquiridos.

## Funcionalidades

- **Listagem de Emblemas:** Endpoint para listar todos os emblemas cadastrados.
- **Criação de Emblemas:** Endpoint para criar um novo emblema.
- **Resgate de Emblemas:** Endpoint para um usuário resgatar um emblema específico pelo seu slug.
- **Filtragem por Nome:** Endpoint para filtrar emblemas pelo nome.

## Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- Banco de dados MySQL (ou outro suportado pelo TypeORM)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/pedroheribeiro2021/cidadealta.git

2. **Instale as dependências:**

npm install
# ou
yarn install

3. **Configure as variáveis de ambiente:**

Crie um arquivo .env na raiz do projeto conforme o exemplo abaixo:

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua-senha
DB_DATABASE=nome-do-banco
JWT_SECRET=seu-segredo-jwt

4. **Execute as migrações do banco de dados:**

npm run typeorm migration:run
# ou
yarn typeorm migration:run

5. **Inicie a aplicação:**

npm run start:dev
# ou
yarn start:dev

A aplicação estará disponível em `http://localhost:3000.`

Documentação da API
A documentação da API pode ser acessada através do Swagger:

Local: `http://localhost:3000/api`
