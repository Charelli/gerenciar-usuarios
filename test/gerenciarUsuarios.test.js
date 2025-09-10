// importar função do src

const { retornaUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funcoes de Gestão de Usuarios', () => {
    it('Validar que eu posso adicionar um novo nome na lista de usuarios', () => {
        // 1. Adicionar um novo nome na lista de usuarios, não preciso declarar função que já foi declarada
        adicionarNovoUsuario('Joao');
         
        // 2. retornar a lista de usuarios
        const listaDeUsuarios = retornaUsuarios();

        // 3. Validar que o nome que eu adicionei está na lista de usuarios
        expect(listaDeUsuarios.at(-1)).to.equal('Joao');

    });
});