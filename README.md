# Trybe Futebol Clube

# Sobre o projeto


O _TFC_ é um site informativo sobre partidas e classificações de futebol.
No desenvolvimento deste projeto fui responsável por desenvolver uma API (de forma __TDD__) e também integrar (através do __docker-compose__) front-end e back-end para que trabalhem juntos consumindo um banco de dados(_MySQL_).

O front-end estava pronto, então minha função era trabalhar no back-end modelando o banco de dados com __Sequelize__, __TypeScript__ e __POO__, com uma API __RESTful__ para que o front pudesse consumir meus endpoints corretamente, também garantir que algumas regras de negócio fossem cumpridas e deixe o back-end com pelo menos 90% de cobertura de teste de integração usando __Mocha__, __Chai__ e __Sinon__.

Também é possível criar, atualizar ou excluir (__CRUD__) uma partida, mas apenas um administrador pode fazer isso, e é necessário um token (__jsonwebtoken__), portanto, a pessoa precisa estar logada para poder fazer essas alterações.

## Layout web

![Web 1](https://github.com/allpha23/assets/raw/main/TFC/login.png)
![Web 2](https://github.com/allpha23/assets/raw/main/TFC/classificação.png)
![Web 1](https://github.com/allpha23/assets/raw/main/TFC/partidas.png)


# Tecnologias utilizadas:

- NodeJs
- TypeScript
- Sequelize
- ExpressJS
- Mocha
- Chai
- Docker


# Como executar o projeto

Pré-requisitos: 
- Sistema Operacional Distribuição Unix
- npm / yarn
- Docker-compose
- Node >= 16
- Docker
- Docker-compose versão >=1.29.2

```bash
# Clonar repositório
git clone git@github.com:allpha23/trybe-futebol-clube.git

# Entrar na pasta do projeto
cd trybe-futebol-clube

# Instalar dependências
npm install

# Compile o projeto
npm run compose:up

projeto estará em execução no endereço localhost:3000

# você deve usar o seguinte e-mail e senha para logar
email: admin@admin.com
password: secret_admin
```
