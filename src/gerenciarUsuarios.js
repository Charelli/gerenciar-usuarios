// criar uma função que retorne uma lista de usuários

const usuarios = [

    {
        nome: 'mateus',
        email: 'mateus@gospel.com'

    },
    {
        nome: 'marcos',
        email: 'marcos@gospel.com'
    },
    {
        nome: 'lucas',
        email: 'lucas@gospel.com'
    },
    {
        nome: 'joao',
        email: 'joao@gospel.com'
    },
   

];

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