# :computer: Projeto Trybe Futebol Clube :computer:

O objetivo foi alimentar o front-end de uma aplicação com o back-end em Typescript que envolve o gerenciamento de partidas e classificações de futebol.
O projeto foi dockerizado e utilizei tudo que aprendi durante o módulo como o MSC, Sequelize, POO, SOLID e testes com Mocha, Chai e Sinon.

<br />

### Stacks utilizadas no desenvolvimento:
<div style="display: inline_block"><br>
  <img alt="Fred-TS" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Fred-DOCKER" src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
  <img alt="Fred-MySQL" src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" />
  <img alt="Fred-NODE" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img alt="Fred-EXPRESS" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img alt="Fred-SEQUELIZE" src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" />
  <img alt="Fred-JWT" src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" />
  <img alt="Fred-MOCHA" src="https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white" />
  <img alt="Fred-CHAI" src="https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white" />
  <img alt="Fred-SINON" src="https://img.shields.io/badge/sinon-323330?style=for-the-badge&logo=sinon" />
</div>

<br />

<details>
<summary>
  
## 1- Requisitos
  
</summary>

### 1. Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de times

### 2. (TDD) Desenvolva testes que cubram no mínimo 5 por cento dos arquivos em /app/backend/src, com um mínimo de 7 linhas cobertas

### 3. Desenvolva o endpoint /teams no back-end de forma que ele possa retornar todos os times corretamente

### 4. (TDD) Desenvolva testes que cubram no mínimo 10 por cento dos arquivos em /app/backend/src, com um mínimo de 19 linhas cobertas

### 5. Desenvolva o endpoint /teams/:id no back-end de forma que ele possa retornar dados de um time específico

### 6. Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de pessoas usuárias

### 7. (TDD) Desenvolva testes que cubram no mínimo 15 por cento dos arquivos em /app/backend/src, com um mínimo de 25 linhas cobertas

### 8. Desenvolva o endpoint /login no back-end de maneira que ele permita o acesso com dados válidos no front-end
  
### 9. (TDD) Desenvolva testes que cubram no mínimo 20 por cento dos arquivos em /app/backend/src, com um mínimo de 35 linhas cobertas
  
### 10. Desenvolva o endpoint /login no back-end de maneira que ele não permita o acesso com um email não cadastrado ou senha incorreta no front-end
  
### 11. (TDD) Desenvolva testes que cubram no mínimo 30 por cento dos arquivos em /app/backend/src, com um mínimo de 45 linhas cobertas
  
### 12. Desenvolva um middleware de validação para o token, verificando se ele é válido, e desenvolva o endpoint /login/role no back-end de maneira que ele retorne os dados corretamente no front-end
  
### 13. Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de partidas
  
### 14. (TDD) Desenvolva testes que cubram no mínimo 45 por cento dos arquivos em /app/backend/src, com um mínimo de 70 linhas cobertas
  
### 15. Desenvolva o endpoint /matches de forma que os dados apareçam corretamente na tela de partidas no front-end
  
### 16. Desenvolva o endpoint /matches de forma que seja possível filtrar somente as partidas em andamento, e também filtrar somente as partidas finalizadas, na tela de partidas do front-end
  
### 17. Desenvolva o endpoint /matches/:id/finish de modo que seja possível finalizar uma partida no banco de dados
  
### 18. Desenvolva o endpoint /matches/:id de forma que seja possível atualizar partidas em andamento
  
### 19. (TDD) Desenvolva testes que cubram no mínimo 60 por cento dos arquivos em /app/backend/src, com um mínimo de 80 linhas cobertas
  
### 20. Desenvolva o endpoint /matches de modo que seja possível cadastrar uma nova partida em andamento no banco de dados
  
### 21. Desenvolva o endpoint /matches de forma que não seja possível inserir uma partida com times iguais nem com um time que não existe na tabela de times
  
### 22. (TDD) Desenvolva testes que cubram no mínimo 80 por cento dos arquivos em /app/backend/src, com um mínimo de 100 linhas cobertas
  
### 23. Desenvolva o endpoint /leaderboard/home de forma que retorne as informações do desempenho dos times da casa com as seguintes propriedades: name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor e goalsOwn
  
### 24. Desenvolva o endpoint /leaderboard/home de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior
  
### 25. Desenvolva o endpoint /leaderboard/home de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional
  
### 26. Desenvolva o endpoint /leaderboard/away de forma que retorne as informações do desempenho dos times visitantes com as seguintes propriedades: name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor e goalsOwn
  
### 27. Desenvolva o endpoint /leaderboard/away, de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end, com os dados iniciais do banco de dados, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior
  
### 28. Desenvolva o endpoint /leaderboard/away de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional
  
### 29. Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados
  
### 30. Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC
  
</details>
<br />

<details>
<summary>

## 2- Nota do Projeto

</summary>

## 100% :heavy_check_mark:

![Project-Trybe-Futebol-Clube](https://raw.githubusercontent.com/FredericoTP/trybe-project-25-trybe-futebol-clube/main/images/trybefutebolclube.png)

</details>
<br />
