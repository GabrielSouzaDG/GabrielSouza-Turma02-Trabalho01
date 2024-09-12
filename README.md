Exercício de testes unitários biblioteca
Descrição
Este é um exercício de testes de uma classe biblioteca que permite adicionar, listar, buscar e remover livros e membros. Além disso, o sistema suporta operações de empréstimo e devolução de livros e possibilita a listagem de livros por diferentes critérios, como autor, gênero e ano.

Este README inclui instruções sobre como configurar e testar o projeto.

Funcionalidades
Gerenciamento de Livros

Adicionar um novo livro.
Listar todos os livros.
Buscar livro por ID e título.
Remover livro por ID.
Emprestar e devolver livros.
Listar livros por autor, gênero e ano.
Atualizar informações de um livro.
Gerenciamento de Membros

Adicionar um novo membro.
Listar todos os membros.
Buscar membro por ID.
Remover membro por ID.
Configuração
Pré-requisitos
Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados. Você pode verificar se já os possui executando os seguintes comandos:

bash
Copiar código
node -v
npm -v
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/usuario/repo-biblioteca.git
cd repo-biblioteca
Instale as dependências do projeto:

bash
Copiar código
npm install
Uso
Estrutura do Projeto
O projeto é estruturado da seguinte forma:

src/Trabalho01Turma02.js: Implementação da classe Biblioteca com todas as funcionalidades.
tests/Trabalho01Turma02.test.js: Testes para verificar o funcionamento da classe Biblioteca.
Executar os Testes
Para garantir que tudo está funcionando corretamente, execute os testes usando o Jest:

bash
Copiar código
npm test
Os testes verificarão as seguintes funcionalidades:

Adição e listagem de livros.
Contagem de livros.
Remoção de livros por ID.
Busca de livro por ID e título.
Adição e listagem de membros.
Remoção de membros.
Busca de membro por ID.
Empréstimo e devolução de livros.
Listagem de livros por autor, gênero e ano.
Atualização de informações de livro.
Contribuição
Contribuições são bem-vindas! Se você deseja contribuir com melhorias ou correções, siga estes passos:

Faça um fork do repositório.
Crie uma branch para suas alterações (git checkout -b minha-alteracao).
Faça as alterações e adicione testes conforme necessário.
Commit suas alterações (git commit -am 'Adiciona nova funcionalidade').
Envie para o repositório remoto (git push origin minha-alteracao).
Crie um Pull Request no GitHub.
Licença
Este projeto está licenciado sob a MIT License.

Certifique-se de substituir o link do repositório e a licença conforme necessário para refletir as informações reais do seu projeto. Se precisar de mais alguma coisa, é só me avisar!
