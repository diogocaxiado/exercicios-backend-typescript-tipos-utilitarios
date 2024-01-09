type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> & {endereco: Endereco, tipoTransacao: Lowercase<'credito' | 'Debito'>}

const venda: NovoCarrinho = {
    item: {
        nome: 'Caneca',
        descricao: 'string',
        valor: 123
    },
    qtd: 2,
    desconto: 0,
    frete: 10,
    tipoTransacao: 'debito',
    cartao: {
        numero: 123,
        validade: '10/12',
        nome: 'Diogo Caxiado',
        cvv: 493
    },
    endereco: {
        cep: '2193145',
        rua: 'Rua Carvalho de Almeida',
        bairro: 'string',
        cidade: 'string',
        estado: 'string'
    }
}