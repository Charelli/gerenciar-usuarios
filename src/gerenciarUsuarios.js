// criar uma função que retorne uma lista de usuários

const usuarios = ['mateus', 'marcos', 'lucas', 'joao']

//retorna uma lista de nomes de usuarios
function retornaUsuarios() {
    return usuarios;
};

// adicinar um novo usuário
function adicionarNovoUsuario(nome) {
// adicionar um novo usuário na lista    
    usuarios.push(nome);

};

module.exports = { retornaUsuarios, adicionarNovoUsuario };