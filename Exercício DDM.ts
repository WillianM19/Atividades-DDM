//Atividade DDM

//a) Crie um array de objetos usuarios, onde cada objeto represente um usuário com as
//propriedades id, name, age e ativo (um booleano que indica se o usuário está ativo ou
//não).

interface User {
    id: number
    name: string
    age: number
    active: boolean
}

const users: User[] = [
    {
        id: 0,
        name: 'João',
        age: 19,
        active: true
    },
    {
        id: 1,
        name: 'Maria',
        age: 29,
        active: true
    },
    {
        id: 2,
        name: 'Ana',
        age: 18,
        active: false
    },
    {
        id: 3,
        name: 'Pedro',
        age: 22,
        active: true
    }
]

//b) Utilize o método filter para criar uma lista de usuários ativos.
const activeUsers = users.filter((user) => user.active)
console.log('Usuários ativos:')
console.log(activeUsers)

//c) Utilize o método filter para criar uma lista de usuários com age maior que 25 anos.
const greaterThan25 = users.filter((user) => user.age > 25)
console.log('Maiores de 25 anos:')
console.log(greaterThan25)

//d) A partir do array de usuarios criado anteriormente, use o método map para criar um novo
//array que contém apenas os names dos usuários.
const greaterThan25NameOnly = greaterThan25.map((user) => user.name)
console.log('Maiores de 25 anos(Apenas name):')
console.log(greaterThan25NameOnly)

//e) Use o método map para aumentar a age de todos os usuários em 1 ano.
const incrementedAgeUsers = users.map((user) => {
    user.age++
    return user
})
console.log('Incrementando idade:')
console.log(incrementedAgeUsers)

//f) Utilize o método forEach para imprimir o nome de cada usuário e seu status
//(ativo/inativo).
users.forEach((user) => console.log(`Usuário:${user.name}\nStatus:${user.active ? 'Ativo' : 'Inativo'}`))

//g) Utilize o método reduce para calcular a idade total dos usuários.
console.log('Idade total:', users.reduce((acc, user) => acc + user.age, 0))

//h) Use o reduce para contar quantos usuários estão ativos.
console.log('Usuários ativos:', users.reduce((acc, user) => user.active ? acc += 1 : acc, 0))

//i) Use o método find para procurar o primeiro usuário que tenha o nome "João".
console.log('Primeiro usuário chamado joão:', users.find((user) => user.name == 'João'))

//j) Use o método find para encontrar o primeiro usuário que esteja inativo.
console.log('Primeiro usuário inativo:', users.find((user) => !user.active))