const Biblioteca = require("../src/Trabalho01Turma02")

describe('Testar Funcionalidades da Biblioteca', () => {

    let biblioteca;

    beforeEach(() => {
        biblioteca = new Biblioteca();
    })

    test('Testar adição de livro e listagem de livros', () => {
        const novoLivro = 'Hobbit';
        const novoLivro1 = 'Moby Dick';
        biblioteca.adicionarLivro(novoLivro);
        biblioteca.adicionarLivro(novoLivro1);

        listaLivros = biblioteca.listarLivros()
        expect(listaLivros).toEqual(['Hobbit','Moby Dick'])
    });

    test('Testar contagem de livros', () => {
        const novoLivro = 'Hobbit';
        const novoLivro2 = 'Moby Dick';
        biblioteca.adicionarLivro(novoLivro);
        biblioteca.adicionarLivro(novoLivro2);

        contaLivros = biblioteca.contarLivros()
        expect(contaLivros).toEqual(2)
    });

    test('Testar remoção de livro por id', () => {
        const novoLivro = 'Hobbit';
        const novoLivro2 = 'Moby Dick';
        biblioteca.adicionarLivro(novoLivro);
        biblioteca.adicionarLivro(novoLivro2);

        const idLivro = 0
        biblioteca.removerLivro(idLivro)
        expect(biblioteca.livros).toEqual(['Hobbit'])
    });

    test('Testar busca de livro por id', () => {
        const novoLivro = 'Hobbit';
        const novoLivro2 = 'Moby Dick';
        biblioteca.adicionarLivro(novoLivro);
        biblioteca.adicionarLivro(novoLivro2);

        const idLivro = 0
        livroBuscado = biblioteca.buscarLivroPorId(idLivro)
        expect(livroBuscado).toBe(novoLivro)
    })

    test('Testar busca de livro por Titulo', () => {
        const novoLivro = 'Hobbit';
        const novoLivro2 = 'Moby Dick';
        biblioteca.adicionarLivro(novoLivro);
        biblioteca.adicionarLivro(novoLivro2);

        livroBuscado = biblioteca.buscarLivroPorTitulo(novoLivro)
        expect(livroBuscado).toContain(novoLivro)
    })
    
    test('Testar adição de membro e listagem', () => {
        const membro1 = 'Leandro';
        const membro2 = 'Ugioni';
        biblioteca.adicionarMembro(membro1);
        biblioteca.adicionarMembro(membro2);

        listaMembros = biblioteca.listarMembros()
        expect(listaMembros).toEqual(['Leandro','Ugioni'])
    });

    test('Testar remoção de membros', () => {
        const membro1 = 'Leandro';
        const membro2 = 'Ugioni';
        biblioteca.adicionarMembro(membro1);
        biblioteca.adicionarMembro(membro2);

        biblioteca.removerMembro(0)
        expect(listaMembros).toEqual(['Leandro'])
    });

    test('Testar busca de membro por id', () => {
        const membro1 = 'Leandro';
        const membro2 = 'Ugioni';
        biblioteca.adicionarMembro(membro1);
        biblioteca.adicionarMembro(membro2);
        buscaMembroPerdido = biblioteca.buscarMembroPorId(0)
        expect(buscaMembroPerdido).toEqual(membro1)
    });

    test('Testar emprestar livro', () => {
        const novoLivro = 'Hobbit';
        const novoMembro = 'Leandro';
        biblioteca.adicionarLivro(novoLivro);
        biblioteca.adicionarMembro(novoMembro);

        emprestaLivro = biblioteca.emprestarLivro(0, 0)
        expect(biblioteca.listarLivrosEmprestados()).toContain('Hobbit')
    })

    test('Testar devolução de livro', () => {
        const novoLivro = 'Hobbit';
        const novoLivro2 = 'Moby Dick';
        biblioteca.adicionarLivro(novoLivro);
        biblioteca.adicionarLivro(novoLivro2);
        livroDevolvido = biblioteca.devolverLivro(0)
        expect(biblioteca.listarLivrosDisponiveis()).toContain('Moby Dick')
    })

    test('Testar listagem de livros por autor', () => {
        const novoLivro = 'Hobbit';
        const novoLivro2 = 'Moby Dick';
        biblioteca.adicionarLivro(novoLivro);
        biblioteca.adicionarLivro(novoLivro2);

        listaLivros = biblioteca.listarLivrosPorAutor('elvis presley')
        expect(listaLivros).toBeTruthy()
    });

    test('Testar listagem de livros por genero', () => {
        const novoLivro = 'Hobbit';
        const novoLivro2 = 'Moby Dick';
        biblioteca.adicionarLivro(novoLivro);
        biblioteca.adicionarLivro(novoLivro2);

        listaLivros = biblioteca.listarLivrosPorGenero('Romance')
        expect(listaLivros).toBeTruthy()
    });

    test('Testar listagem de livros por ano', () => {
        const novoLivro = 'Hobbit';
        const novoLivro2 = 'Moby Dick';
        biblioteca.adicionarLivro(novoLivro);
        biblioteca.adicionarLivro(novoLivro2);

        listaLivros = biblioteca.listarLivrosPorGenero(2019)
        expect(listaLivros).toBeTruthy()
    });

    test('Testar atualizacao de informação de livro', () => {
        const novoLivro = 'Hobbit';
        const novoLivro2 = 'Moby Dick';
        biblioteca.adicionarLivro(novoLivro);
        biblioteca.adicionarLivro(novoLivro2);

        atualizaLivro = biblioteca.atualizarInformacaoLivro(0, 'Autor: Leandro');
        expect(biblioteca.listarLivros()).toContain('Autor: Leandro');
    }
    )
})
