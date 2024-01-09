type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

const conexao = (dados: Readonly<Conn>) => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}

const testando = conexao({
    username: 'Diogo',
    password: '123abc321',
    dbname: 'projeto',
    host: '5523',
    port: '3000'
})

console.log(testando);
