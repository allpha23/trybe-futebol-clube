# Trybe Futebol Clube

# Sobre o projeto


O _TFC_ é um site informativo sobre partidas e classificações de futebol.
No desenvolvimento deste projeto fui responsável por desenvolver uma API (de forma __TDD__) e também integrar (através do __docker-compose__) front-end e back-end para que trabalhem juntos consumindo um banco de dados(_MySQL_).

O front-end estava pronto, então minha função era trabalhar no back-end modelando o banco de dados com __Sequelize__, __TypeScript__ e __OOP__, com uma API __RESTful__ para que o front pudesse consumir meus endpoints corretamente, também garantir que algumas regras de negócio fossem cumpridas e deixe o back-end com pelo menos 90% de cobertura de teste de integração usando __Mocha__, __Chai__ e __Sinon__.

Também é possível criar, atualizar ou excluir (__CRUD__) uma correspondência, mas apenas um administrador pode fazer isso, e é necessário um token (__jsonwebtoken__), portanto, a pessoa precisa estar logada para poder fazer essas alterações .

## Layout web


# Tecnologias utilizadas:

- TypeScript
- Sequelize
- Mocha
- Chai

## Implantação em produção

# Como executar o projeto

Pré-requisitos: 
- npm / yarn
- Docker-compose

```bash
# clonar repositório
git clone git@github.com:allpha23/trybe-futebol-clube.git

# entrar na pasta do projeto
cd trybe-futebol-clube

# Compile o projeto
npm run compose:up

# executar o projeto
projeto estará execução em localhost:3000
```

# Autor

Pedro Walpablôndy Soares

https://www.linkedin.com/in/pedro-walphablondy
