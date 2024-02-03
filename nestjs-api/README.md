# **✨ Como executar**

**Para o correto funcionamento deste projeto, é necessário tê-lo aberto localmente em sua máquina e com o terminal acessado no projeto. Execute os seguintes comandos no terminal de sua escolha:**

> Nest.js
>
> - Para instalar os pacotes pendentes `npm install`.
> - Para rodar o projeto `npm run start:dev` **ou** `npm run start`.
> - Execute `nest g resource` para criar um novo módulo.
> - Nomeie o módulo deixando-a no plural, adicione o layer (neste projeto é utilizado o REST API) e se quer que crie o CRUD.

> DOCKER
>
> - Para inicializar `docker-compose up -d` (caso dê erro abra o docker desktop e reinicie ele).
> - Execute `docker-compose exec mysql bash` para criar um container.
> - Execute `mysql -uroot -p imsersao17` para conectar com o banco.
> - Execute a senha `root` para acessar.
> - Execute o código do arquivo **[db.sql](./db.sql)** para criar as tabelas.
> - Execute `show tables;` para visualizar as tabelas que foram criadas.
> - Execute `select * from [nome da tabela];` para visualizar os dados de uma tabela específica.
