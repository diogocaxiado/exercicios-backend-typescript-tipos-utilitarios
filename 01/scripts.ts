type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}

const reaproveitamentoDeTipo = (info: Omit<Usuario, 'rg'>) => {
    return info
}

console.log(reaproveitamentoDeTipo({
    nome: 'Diogo',
    email: 'diogo@email.com',
    cpf: '52849283232'
}));
