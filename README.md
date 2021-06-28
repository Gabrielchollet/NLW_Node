# NLW VALORIZA
> Projeto da semana Next Level Week
Projeto de back-end na linguagem Node.js para criação de elogios para usuários e anotações para seus times, que são representados por suas linguagens de programação!
## Sumário:
- [Sobre](#about)
- [Rotas e Regras](#routesandrules)
- [Conceitos](#concepts)


## :file_folder: Estrutura do Projeto
<pre>
├──USER                                     ├──Tag                               
├ ├──(PK) ID (uuid)                         ├ ├──(PK) ID (uuid)                
├  ├──name (varchar)                        ├  ├──name (varchar)               
├  ├──name (varchar)                        ├  ├──created_at (Date)            
├  ├──name (varchar)                        ├  ├──updated_at (Date)            
├  ├──email (varchar)                       ⬇ 
├  ├──password (varchar)                    ⬇ 
├  ├──admin (boolean)                       ⬇ 
├  ├──created_at (Date)                     
├  ├──updated_at (Date)                   ├──Compliments                      
⬇                                         ├ ├──(PK) ID (uuid)                 
⬇                                         ├  ├──(FK) user_sender (uuid)        
➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡  ├  ├──(FK) user_receiver (uuid)      
                                          ├  ├──(FK) tag_id (uuid)            
                                          ├  ├──created_at (Date)             


</pre>
<hr>
<h2>:checkered_flag: Sobre o projeto </h2> <a name="about"></a>

### Principais conceitos aprendido no projeto

#### Introdução
- O que é node.js, e toda a seu funcionamento de como o Node.js funciona;
- Conceito de API
- Tipos de métodos, paramêtros
- Rotas

#### TypeORM
- Migrations
- Entidades
- Repositórios
- Services
- Relacionamentos de tabelas
- ORM
- Relacionamentos entre entidades;
#### Autenticação
- Middlewares;
- JWT
- Garantia de autenticação na aplicação e tratativas de erro
#### Clean Code
- Camadas de aplicação;
- Conceito de clean code - divindindo responsabilidades da aplicação;
- Tipagens com typescript

<hr>

<h3>:flags: Rotas da Aplicação </h3> <a name="routesandrules"></a>

<details>
<summary>Expandir</summary>

### NLW VALORIZA

#### Rotas de Login e Create User
##### POST
- /users: Criação de usuário
- /login: Autenticação de usuário

#### Rotas de Admin

##### POST
- /tags: Criação de tags

#### Rotas Gerais

##### GET
- /users: Busca todos os usuários
- /tags: Busca todas as tags de elogio

#### Rotas de Envio e Recebido do Usuário Logado

##### GET
- /user/compliments/send: Busca todos os elogios enviados
- /user/compliments/receive: Busca todos os elogios recebidos

</details>


<h3>:no_entry_sign: Regras de Negócio </h3> <a name="routesandrules"></a>

<details>
<summary>Expandir</summary>

### NLW VALORIZA

- Cadastro de usuário
- [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail 
- [x] Não é permitido cadastrar usuário sem e-mail 

- Cadastro de Tag
- [x] Não é permitido cadastrar mais de uma tag com o mesmo nome
- [x] Não é permitido cadastrar tag sem nome
- [x] Não é permitido cadastrar por usuários que não sejam administradores

- Cadastro de elogios
- [x] Não é permitido um usuário cadastrar um elogio para si
- [x] Não é permitido cadastrar elogios para usuários invalidos
- [x] O usuário precisa estar autenticado na aplicação
</details>

<hr>
<h2>:pencil: Conceitos aprendidos </h2> <a name="concepts"></a>

<details>
<summary> Dia 1 - Liftoff</summary>

## Aula 1 - Introdução do Projeto
Utilizaremos o yarn como a biblioteca de dependências para o projeto

> Dependências

Além de aula de hoje ter explicado conceito e diferença de Dev Dependencies e Dependencies:
<pre>
> Dev Dependencies:
As bibliotecas nesse ambiente servem somente para o desenvolvimento do projeto
</pre>
<pre>
> Dependencies:
Bibliotecas que serão utilizados na aplicação em produção
</pre>


> Bibliotecas

Algumas libs que iremos utilizar para iniciar o projeto:
- Express e também @types/express para tipagens comuns do express
- Typescript para node
- ts-node-dev para configurar o node para ler arquivos .ts(typescript)

> Métodos HTTP

Os métodos HTTP que serão utilizados no projeto irá ser:
<pre>
* GET => Buscar uma informação/dado
* POST => Inserir uma informação/dado
* PUT => Alterar uma informação/dado
* DELETE => Deletar uma informação/dado
* PATCH => Alterar uma informação/dado especifíca
</pre>

> Rotas

Sempre dentro das rotas temos dois parâmetros:
<pre>
* Request ou req => Informações/Dados de Entrada
* Response ou res => Informações/Dados de Saída
</pre>

> Programas

No projeto estou utilizando o POSTMAN para gerenciamentos e testes das rotas
Também utilizando o beekeeper studio para o SQL

> Código da AULA 1 - #Together

</details>

<details>
<summary>Dia 2 - Maximum Speed</summary>

## Aula 2 - TypeORM

### Tipos de parâmetros
<pre>
* Routes Params => http://localhost:3000/produtos/(params)
- O route params serve para definir para acessar um parametro para a rota, por exemplo para acessar um id de um produto, ou seja o id é o paramêtro nesse caso
- O route params são obrigatórios pois são implicitos nas rotas

* Query Params => http://localhost:3000/produtos?(chave)=(valor)&(outroChave)=(outroValor)
- Serve nesse para fazer filtros ou buscar dentro das nossas rotas, sempre para começar ele é com "?" e sempre segue o padrão de chave e valor para colocar outro filtro utiliza-se o "&"
- Os Query params são opcionais, não são implicitos nas rotas

* Body Params => {
    "name": "teclado",
    "description": "teclado-bom"
}
- Vem no corpo da requisição os paramêtros, tanto JSON, txt, qualquer valor no corpo da requisição
</pre>
Existem 3 formas para utilizar o banco de Dados

- Pelo próprio driver
- Query Builder
- ORM(Object Relational Map)

No projeto iremos utilizar o ORM com a biblioteca do TypeORM
Para utilizar o TypeORM é necessário também o driver do banco para qual irá utilizar, no projeto ira ser

- typeorm
- reflect-metadata
- sqlite3

### TypeORM

No TypeORM existem varias maneiras para definir suas propriedades de acordo com a documentação, mas no projeto iremos utilizar por JSON, na raiz do projeto iremos criar o **ormconfig.json**

Dentro do JSON do ormconfig.json temos algumas propriedades:

- type: Qual driver de banco ira ser utilizado no projeto
- database: Arquivo criado na raiz do projeto * quando utilizado no projeto de sqlite ele cria um arquivo de banco de dados

Dentro da pasta database iremos criar um index.ts com um import createConnection que vem do typeORM, chamando a função no arquivo e assim, o typeORM ira criar a conexão do banco de Dados

### Migrations

Migrations são vercionamentos do banco de dados da aplicação, ou seja, no caso cada alteração no banco de dados é criado um registro e é criado um **histórico** do banco de dados da aplicação, principalmente útil para o trabalho em equipes pois mantém o banco de dados de todos da equipe da mesma forma, simplesmente roda as migrations e mantém sempre o mesmo banco de dados

Dentro do ormconfig é criado um cli.

CLI é uma ferramenta que pode ser utilizada no terminal de uma forma global na aplicação, no caso do projeto iremos utilizar o cli dentro da nossa biblioteca e indica aonde vai ser criado as migrations da aplicação
É necessário criar um script no package.json da aplicação:
```json
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
```
#### Cheatsheet-Migrations
<details>
<summary>Expandir</summary>
Para criar uma migration:
- yarn typeorm migration:create -n nomeDaMigration

Para executar a migration:
- yarn typeorm migration:run

Para criar entidades:
- yarn typeorm entity:create -n nomeDaEntidade
</details>

Em migrations existe dois métodos:

- **UP**: Serve para criações, alterações e adições

- **DOWN**: Caso precise desfazer é o processo reverso do up com dropTable

Na documentação você pode verificar aonde são salvas as migrations e tipo de arquivo a serem localizados, dentro da ormconfig.json em "migrations"

Para criar entidades de estruturas com a pasta automática e a base do arquivo utiliza-se dentro do cli do ormconfig json

```json
"cli": {
    "migrationsDir": "caminho/diretorio/aqui",
    "entitiesDir": "caminho/diretorio/aqui"
}
```
### Entidades

Entidades são tabelas do projeto, por exemplo entidade User é tabela User do projeto.
Pois no ORM funciona do seguinte fluxo:
<pre>
Entidade < . > ORM < . > BD {users}
</pre>

No arquivo da entidade para referenciar uma entidade a uma tabela do banco, somente colocar o nome da tabela dentro dos parametro do @Entity

Por questões das documentações do TypeORM no getting started, para o typescript, dentro do ts config tem que habilitar duas opções no tsconfig.json
- experimentalDecorators
- emitDecoratorMetadata

Também habilitar para false o strictPropertyInitialization, pois o js irá implicar que os atributos do entity ainda não foram inicializados

Para referencias as PK, colunas, e timestamps da tabela é necessário importar do typeorm as propriedades

{ PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn }

Ira instalar também uma biblioteca da uuid e suas tipagens e importar ele dentro da Users e usaremos o uuid v4
Iremos também criar um construtor dentro da classe de User para o id utilizando a biblioteca do uuid
*Construtor é como a classe vai ser montada quando ela é invocado,ex: new nomeClasse*

### Repositório

Repositórios são para criar métodos, além daqueles que ja possue ou para criar tratativas, tudo isso é criado no customs repositories

No projeto iremos utilizar com uma classe do UsersRepositories.ts
É necessário também importar do typeORM o getCustomRepository para ele gerenciar o repositório que ira ser usado como base para criar um repositório customizado
Iremos extender a classe Repository para o nosso Repositório pois o typeORM ja tem alguns métodos definidos

### Serviços

O que são Services?
O fluxo dele é da seguinte forma:
<pre>
- server -> ( ) -> SERVICE -> Repositories -> BD {users}
</pre>

É a parte da aplicação onde faz todo tratamento e processamento das validações das regras de négocios, é a camada de serviço responsável para validação antes que a requisição seja enviada para o banco de Dados ou tratativa de retorno para o cliente

Toda aplicação tem suas regras de negócios, casos de usos, regras funcionais e não funcionais

Conceito de código limpo - como SOLID para aplicar em projetos

Um dos conceitos é lembrar que toda classe existe por um motivo e que essa mesma classe não pode possuir responsabilidades demais construido dentro delas

No projeto foi criado o CreateUserService aonde sua única responsábilidade vai ser em relação ao cadastro de usuários e suas divisões de responsabilidades

Uma interface é para você indicar a classe quais tipos de objetos ele irá receber

### Controller
O controller no fluxo se encontra antes da camada de SERVICE
<pre>
- server -> controller -> service -> repository -> BD {users}
</pre>

Ele recebe a requisição do servidor e repassa para o service trata essa informação, dentro do controller teremos as informações do nosso request e do nossso response, assim deixando as responsabilidades corretas para aplicação

### Routes

Para não poluir nosso services e definir as rotas da aplicação é criado um arquivo routes.ts dentro do src da aplicação, e nesse arquivo sempre ficas as rotas da aplicação, assim como o caminhos do controllers para serem direcionados a camada de serviços, nesse arquivo vai ficar todas as rotas da aplicação

> Para habilitar o express aceitar json em suas entradas, é necessário utilizar o app.use(express.json())

> Código da Aula 2 #unidade

</details>

<details>
<summary> Dia 3 - In Orbit</summary>

## Aula 3 - Tratativas e Middlewares
Nessa aula, iremos tratar a excessão e como utilizar os tratamentos e estruturas das tags e por fim conhecer o conceito de middleware na aplicação

> Para tratativas de erro HTTP, utilizar o http.cat como guia!

### Tratativas de erro
Ao lançar a excessão que para a camada de controller, temos que fazer a tratativa pelo controller, existem duas formas para fazer a tratativa:

- Pelo método try e catch, ou seja, tente fazer algo se não conseguir cai no catch e recebo o erro
- Pelo método de tratar no server, com um middleware das rotas

Com try e catch fica muito massante para aplicações largas, então a melhor forma é tratar na camada, ao invés de tratar no controller, fazer a tratativa no server com um middleware

<pre>
- Controller -> Service (throw new Error)
Iremos tratar com um middleware para tratativas que ocorrerão no server
- server(middleware) -> controller -> ...
</pre>

### Middleware

Middlewares são interceptadores que usamos dentro de uma requisição tanto como **interromper** ou como **adicionar uma informação** dentro do middleware, seria algo no meio entre a requisição e a resposta

> O papel do middleware é pegar as respostas das rotas e fazer uma tratativas verificando se há algum erro na rota

#### Cheatsheet-Middlewares
<details>
<summary>Expandir</summary>

- Middleware de erro possui 4 paramêtros, do tipo err, request, response e next
```js
 ((err: Error, request: Request, response: Response, next: NextFunction)
```

Temos que verificar qual a instância do erro:

Pode ser que ele seja um erro não tratável que não é tratado pela aplicação, ou erro de servidor como 500

Por padrão do express, ele não consegue capturar os erros de requisição aonde se utiliza o async, ele não consegue capturar os erros que estão vindos (erros assíncronos), ou seja é necessário utilizar uma biblioteca para tratar esses erros

- yarn add express-async-errors

E importar no server.ts que ele ja ira conseguir tratar de lidar com esses erros

Tratando dessa forma é sempre uma regra o middleware ser utilizado depois da rota chamada, pois ele necessita tratar a resposta depois que ela é enviada ao service for chamado

</details>

### Criar estrutura - tags

Iremos criar uma nova migration para as tags, com o nome de CreateTags

Irá conter colunas de ID, name, created_at, updated_at

Agora iremos aplicar as regras de negócio, criaremos uma entidade chamada Tag com as suas columnas e entidades, e também criar um TagsRepositories onde ira extenders as funções de repositório do TypeORM
e também um CreateTagService

> Quando precisa só referenciar somente um valor na interface pode ser executado direto no parametro do execute
```js
class exemploService {
    async execute(valor: tipo)
}
```

Dentro do service iremos tratar alguns erros em questão de verificar se o nome é invalido/incorreto, se a tag ja existe

O conceito do find One do repositories é como exatamente o comando de SQL
SQL:
<pre>
SELECT * FROM EXAMPLE WHERE NAME = "name"
</pre>
TypeORM:
<pre>
const valueAlreadyExists = await exampleRepositories.findOne({ name })
</pre>

Criado também o controller da Tag para tratar request e response e pegar o body name da tag pelo request, e depois do controller criado nós referenciamos ele em nossa rota no route.ts, criando uma rota post e aplicando o handle do controller

Depois a validação vai estar confirmando no banco se ja existe a tag ou se o nome está incorreto/nulo, agora iremos cadastrar a parte onde não é permitido o cadastro de tags por usuários que não sejam administradores

Para verificar é necessário ter na rota dos tags para cadastrar a tag, uma validação para verificar se o usuário que faz a requisição se é administrador ou não

Iremos criar uma pasta de middleware para cadastro de todos essas verificações

É criado o arquivo ensureAdmin para verificar se o usuário que esta fazendo a requisição é admin, como é um middleware de erro sempre é necessário importar os três parametros que são: *Request, Response, NextFunction*

Como no momento do projeto ainda não foi implementado o JWT, iremos controlar a variavel do admin, para true

Para verificar de se o usuário é admin é aplicado o next, caso não seja é retornado o http status 401 de Unauthorized

Algo bacana para utilizar no projeto deixar o status Code global o usuário ja consegue identificar melhor o que realmente está acontecendo para receber aquele status code

Depois usaremos o middleware para nossa rota, no routes.ts

Não se utiliza o router.use no middleware pois se for usado todas as rotas serão obrigados a passar por aquele middleware, ou seja, por exemplo uma rota de cadastro que não existe o usuário não faz sentido ele ter uma verificação de admin, nesse caso de middleware nós especificamos ele entre o caminho da rota e o controller dele;
Você pode colocar quantos middlewares que achar necessário para executar
```js
router.post("/router", exampleMiddleware, exampleMiddleware2, exampleController)
```


> Código da aula 3 - embuscadeevolucao

</details>

<details>

<summary>Dia 4 - Landing</summary>

## Aula 4 - Trabalhando com JWT

### JWT - Json Web Tocken

Através do JWT, ele distribui esse token para poder manter autenticação do usuário e pode atuar

Como funciona o token? É divído em 3 partes

- Header: tipo de Token e o algoritmo de criptografia
- Payload: São informações que precisamos passar de dentro do token, por exemplo, id, email, nome do usuario, tempo de expiração
- Verificação de assinatura: Ele ira concatenar o header e o payload alem da chave secreta do JWT que é criado nossa chave de API

> JAMAIS, coloque a senha do usuário no token, por mais que seja seguro, ou não manipulavel, se houver dados sensíveis é possível descriptografar

Iremos utilizar a biblioteca do jsonwebtoken e suas tipagems @jsonwebtocken como dependencia de desenvolvimento


Para criar nosso token, temos que garantir que é um usuário que exista na banco de dados e seus dados que estão enviando se são corretos
### Hash de senhas

No projeto iremos agora adicionar uma migration contendo uma coluna de senha na tabela de users

- yarn typeorm migration:create -n AlterUserAddPassword

E adicionar uma coluna do type varchar com o nome de password, alem adicionar na entidade de User, no controller e no service

No momento a aplicação esta salvando a senha em texto plano e isso é **PÉSSIMA PRÁTICA DE SEGURANÇA**, pois você pode deixar seus usuarios daquele sistema totalmente vulneraveis, alem da quebra de privacidade.

Iremos instalar a biblioteca do bcryptjs para conseguir, além da suas tipagens

- yarn add bcryptjs
- yarn add @types/bcryptjs

Dentro do CreateUserService, iremos importar o hash da biblioteca do bcryptjs e criar uma criptografia para o password ser convertido no hash desejado

Antes do chamar o repositório para criar o usuário, iremos definir uma const, chamando a função do hash, os dois paramêtros que ele recebe a primeira é a senha e o segundo é o salt, que é tipo de criptografia, ou seja, o tamanho da criptografia para o seu salto, um padrão a ser utilizado é o tamanho 8, e é uma promise definindo um await nele, como o create do repositório é os dados que serão enviados para o banco, temos que alterar para o campo password receber a nossa password com hash, definindo pelo nome do campo e o valor que vai ser atribuido
```js
const passwordHash = await hash(password, 8) // Criado hash da senha com salt 8

const user = usersRepository.create({
    name,
    email,
    admin,
    password: passwordHash // Valor alterado
});
await usersRepository.save(user);
return user;
```

### Autenticação do usuário

Iremos criar um service para a autenticação do usuário, com o nome AuthenticateUserService.ts

A classe de autenticação ira esperar para receber o email e password, e iremos criar uma interface esperando esses dois paramêtros como string

Na classe de execute temos duas tratativas:

- Verificar se email existe;
- Verificar se a senha está correta

Na trativa de se o usuário existe, iremos usar do userRepositorie para verificar se o email ja existe no banco com o findOne

> Quando passa uma informação de retorno com dados sensíveis, por questões de segurança da aplicação, nós precisamos deixar a mensagem de erro mais genérica, afim de deixar aplicação mais segura para evitar de brute Forces

Para verificar a senha usaremos outro método do bcryptjs que é o compare, para permitir comparar duas senhas, pois quando você a informação do usuário para a validação, o usuário irá enviar uma senha com texto plano, e a função compare permite converter esse texto do usuário para um hash, com a intenção de comparar o hash que está no banco de dados para permitir o usuário logar
Essa função esta comparando a informação do user com a do banco de dados, e ele retorna como booleano
- True : Senha Correta
- False: Senha Incorreta
```js
const passwordMatch = await compare(password, user.password);
```

E por fim se tudo estiver certo, iremos gerar o token para o usuário, mas primeiro precisamos importa do jsonwebtocken, importa o sign que vai ser gerado o token, e depois criar uma const de token com a função do sign, passando o payload e o secret do jsonwebtoken, e também temos a opção de definir algumas opções para o nosso token, como um subject, , por exemplo qual informação que passar, por exemplo, o id do usuário, e também um tempo de expiração.

```js
const token = sign({
    exma: user.email
}, "json-secret-aqui" , {
    subject: user.id,
    expiresIn: "1d",
});
return token;
```

Para um cenário ideal um token menor de 15 minutos e utilizar um refreshToken com tempo de expiração maior e quando esse token expirar, em vez do cliente inserir novamente o email e a senha dele, a aplicação (front-end) ele vai armazenar esse refreshToken e cada x tempo que esse token expirar, ele vai auto-gerar um novo token com base no refreshToken

> Para utilização de jsonwebsecret, podemos usar o generator de md5 para maior segurança da nossa aplicação
> Colocar no projeto depois varíaveis de ambiente para uma milha extra

Iremos agora criar um controller para fazer o handle do nosso request de email e password, primeiramente criando a classe, recebendo o token e passando o email e  a senha, e se tudo der certo é retornado um response.json contendo o token.
```js
    async handle(request: Request, response: Response){
        const {email, password} = request.body

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            email,
            password
        });

        return response.json(token);
```

Agora iremos adicionar esse controller em nossas rotas, declarar um novo objeto do AuthenticateUserController, e definir uma rota post para a rota que você quiser, no projeto iremos utilizar o login.

Crie uma rota no postman com a rota colocada e teste enviando um body JSON com email e password cadastrado do banco!

> Você pode verificar o token de que veio da rota no site do https://jwt.io, mostrando no token algumas propriedades como o email, tempo de criação e expiração 

### Criando a tabela de Compliments

Agora iremos criar a migration da Compliments
```js
yarn typeorm migration:create -n CreateCompliments 
```
Iremos criar a estrutura do projeto na Migrations do CreateCompliments, e eles iremos agora implementar o relacionamento de tabelas, ou seja, Foreign Key

Quando falamos relacionamentos de tabelas, precisamos ter um campo, mas não basta ter somente ele, mas sim precisa sabe da aonde ele está vindo, ou seja, de qual tabela esta sendo referenciado esse valor

Para criar uma foreign key, existem duas formas para criar ela:

- Pode ser criado depois do new Table, pode definir uma das opções que permite criar um array e dentro dele criar as FK, nesse array são definidos algumas propriedades como:

```js
{
    name: "nomeDaForeignKey",
    referencedTableName: "tabelaDeOrigem",
    referencedColumnNames: ["colunaDeOrigem"],
    columnNames: ["colunaQueVaiConterValorOrigem"]
    onDelete: "quandoDeletarRemover", // Pode setar como nulo ou outras ações
    onUpdate: "quandoAtualizarAcao"
}
```

- Pode ser criado com uma função async utilizando o query runner com CreateForeignKey depois da função createTable

```js
await queryRunner.createForeignKey(
    "tabelaAtual",
    new TableForeignKey({
    name: "nomeDaForeignKey",
        referencedTableName: "tabelaDeOrigem",
        referencedColumnNames: ["colunaDeOrigem"],
        columnNames: ["colunaQueVaiConterValorOrigem"]
        onDelete: "quandoDeletarRemover", // Pode setar como nulo ou outras ações
        onUpdate: "quandoAtualizarAcao"
    })
)
```

Foi criado no projeto três FK com os nomes FKUserSenderCompliments e FKUserReceiverCompliments, referenciado a coluna id da tabela users para a colunas do user_sender e user_receiver e com os onDelete e onUpdate nulos, e a FKTagsCompliments , referenciado a coluna id da tabela tags para a colunas do tag_id e com os onDelete e onUpdate nulo

```js
                foreignKeys:[
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames:["user_sender"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserReceiverCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames:["user_receiver"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserTagCompliments",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames:["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
```
E um query Runner Drop Table Compliments, e após usar um migration:run para criar a tabela de compliments.

### Entities Compliments

Iremos agora criar a entidade de Compliment.ts, com as mesmas propriedades do entities de Tag e User

Diferente das outras tabelas, essa tabela possui relacionamentos e no caso é necessário referenciar as foreign key da entities para o banco, para referenciar utiliza o JoinColumn() e passa que o valor de baixo represente seu paramêtro, e seu tipo de relacionamento com @TipoRelacionamento
```js
@JoinColumn({name: "valorReferenciado"})
@ManyToOne(() => Example) // Qual tipo de relacionamento ira ser, nesse caso estou dizendo n:1
example: Example;
```
> Existem 4 tipos de relacionamentos de tabelas:
>> Um para Um - 1:1
>> Um para Muitos - 1:n
>> Muitos para Um - n:1
>> Muitos para Muitos - n:n

No projeto foi criado os relacionamentos das colunas user_receiver, user_sender e tag_id
```js
    @Column()
    user_sender: string;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    userSender: User;

    @Column()
    user_receiver: string;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User;
```

### Repositories Compliments

Iremos agora criar o repositório do Compliments, com o mesmo padrão mas só mudando o @EntityRepository para a tabela Compliment, com o class de ComplimentsRepositories e estendendo do Repositório da Classe Compliment e exportar ele

### Service Compliments

Seguindo a mesma estrutura dos outros services, mas implementando uma interface aonde você ira conter os valores de tag_id, user_sender, user_receiver e message, e fazendo a destruturação na função async execute, contendo o repositórios do complimentsRepositories e usersRepositories

Para tratar sobre cadastrar elogios para usuarios inválidos e usuário precisa estar autenticado na aplicação, só com autenticação ja conseguimos cumprir essas duas regras, e depois usaremos o middleware de autenticação para validar essas duas regras.

Verificamos também se o usuário que esta enviando o elogio se não é ele mesmo e iremos verificar se o usuário se o user_receiver é um usuário valido, como o user_receiver é o id do usuário, por padrão o findOne ele busca sempre o valor id então nesse caso pode ser o paramêtro nessa rota.
```js
if(idExemploSender === idExemploReceiver)

async execute({idExemplo}: IExampleRequest){
    const examplesRepositories = getCustomRepository(ExampleRepositories);
    const idExemploExists = await exampleRepositories.findOne(idExemplo);
}
```

E depois de tudo certo pode se criar a função de complimentsRepositories.create passando os valores do tag_id, user_receiver, user_sender e message e após criar, salvar com o complimentsRepositories.save passando o const do compliment e retornando ele.
```js
const example = exampleRepositories.create({
    valorExample
});
await exampleRepositories.save(example);
return example;
```

### Controller Compliments

Agora iremos criar o handle do Compliments, como no momento precisamos fazer algumas alterações para aula 5, no momento iremos receber a informação do request body, e na próxima aula iremos refatorar
Os valore são os tag_id, user_sender, user_receiver, message dentro do execute
```js
class CreateComplimentController {
    async handle(request: Request, response: Response){
        const { tag_id, user_sender, user_receiver, message } = request.body;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            tag_id, user_sender, user_receiver, message
        });

        return response.json(compliment);
    }
}
```
E nos routes.ts criar uma rota "/compliments", e o caminho do controller.handle dele

No momento ao testar aplicação o user_sender ira ser tratado com autenticação, ja os outros campos estão validos, verificar também do tag_id(não sei se é necessário)

Iremos definir o default admin para false quando for criar um usuário.
Para fazer isso no typescript, no camada de service (CreateUserService.ts), nos parametros do execute você atribui um valor do admin para false que ira automaticamente atribuir um valor default, caso esse paramêtro não seja preenchido
```js
async execute({nome, email, admin = false, password})...
```


</details>
<details>

<summary>Dia 5 - Surface Exploration</summary>

## Aula 5 - Finalizando o projeto

### Middleware de autenticação

Iremos criar o middleware de autenticação, na pasta de middlewares como ensureAuthenticate

A função do middleware vai ser da seguinte forma:
- Receber o token;
- Validar se token está preenchido;
- Validar se token é válido
- Recuperar informações do usuário

A estratégia que iremos adotar é o bearer Token, aplicando o token no req.headers.authorization, agora que precisamos fazer como ja sabemos a estrutura do token e validar ele, fazendo um split do js para comparar se o token é um token valido do JWT

Primeiros iremos tratar se ele estiver preenchido ou não, caso não esteja preenchido, ira replicar um response.status(401), como unathorized, iremos importar a função verify da biblioteca do JWT para verificar se o token é valido, recortando o bearer com o split, para conseguimos autenticar o usuário colocaremos essa função dentro de um try e catch
```js
const [, token] = authToken.split(' ');

try{
    const decode = verify(token, "jwt-secret-aqui");
    return next()
} catch (err) {
    return response.status(401).end();
}
```

Agora que concluimos nesse momento para o usuário é autenticado, mas se for para recuperar informações de usuarios mas o que é legal que conseguimos manipular o nosso request para resgatar algumas informações, como ele resgata o id do usuário, nós podemos colocar o id do nosso usuário logado, porque pode ser que algumas rotas vão precisar do id do usuario, com o subject

No typescript conseguimos sobresrever alguns tipos de bibliotecas que ja possuem suas tipagens, para isso dentro da pasta src, iremos criar uma pasta @types, dentro dela iremos criar uma outra pasta express, e dentro dessa pasta, ira ter um arquivo index.d.ts
e aplicar isso dentro dele:, para conseguimos utilizar o request.user_id para resgatar algumas informações do usuário
```js
declare namespace Express {
    export interface Request {
        user_id: string;
    }
}
```

Mas ainda esta dando erro pois o request.user_id ainda espera receber uma string, pois o sub do token não é o valor que o mesmo deseja, no typescript iremos utilzar o interface para converter o sub para string e forçar no verify seja como interface IPayload
```js
interface IPayload{
    sub: string;
}

    try {
        const { sub } = verify(token, "3f5d78c9055fcfb1d20630f3fc08e28a") as IPayload
        request.user_id = sub
    } catch (error) {
        return response.status(401).end()
    }
```

É necessário também definir no tsconfig.json no typeRoots para declarar aonde esta as tipagens personalizadas
```js
"typeRoots": ["./src/@types"],...
```
Iremos recuperar a informação do id do admin, colocando dentro do ensureAdmin a destruturação do user_id e verificamos que no console ele ja mostra o id do usuario depois que acessar o middleware de admin

Para verificação do admin, iremos importar o nosso repositories de Users (UsersRepositories) e criar uma função de find.one com o user_id obtido do request, destruturando o admin e assim podemos remover a constante de teste admin igual à true.
A função do ensureAuthenticate ira ficar assim:
```js
export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    const {user_id } = request;

    const usersRepositories = getCustomRepository(UsersRepositories);

    const { admin } = await usersRepositories.findOne(user_id)


    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    });
}
```
Ja concluimos a parte de autenticação  e verificar se o usuario é valido, assim como a validação do ADM

### User sender - Correção

Agora iremos arrumar o user_sender para poder ele receber o usuário que esta enviando do request.user_id e não do request.body para não ocorrer o erro de SQL Lint, por causa da FK
Agora iremos colocar a destrutuaração do request pegando o user_id da request, e const compliment na função de create, o user_sender ira receber o user_id
```js
class CreateComplimentController {
    async handle(request: Request, response: Response){
        const { tag_id, user_receiver, message } = request.body;
        const {user_id } = request;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            tag_id, user_sender: user_id, user_receiver, message
        });

        return response.json(compliment);
    }
}
```
Pegando dessa forma, o usuário é obrigado a fazer autenticação para poder conseguir fazer o envio do compliment, pois o user_sender não é mais manipulavel

Concluímos o projeto da nossa aplicação, as etapas que foram concluídas:

- Cadastro de tags somente com admin;
- Garantir que o usuário esta autenticado com JWT;
- Cadastro de usuários
- Cadastro de elogios

### List Compliments by User
Mas iremos implementar um algo mais no projeto, iremos criar uma listagem de elogios enviados e recebidos do usuário logado
Primeiramente iremos criar um service com o nome do ListUserReceiveComplimentsService.ts e ListUserSendComplimentsService.ts

Vamos trabalhar no arquivo do ListUserSend, iremos criar uma classe chamando o customRepositories do compliments e fazer um método de find para achar todos os user_send de acordo com o user_id da request(Usuário Logado) e ele ira retorna os compliments que enviou
```js
import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListUserSendComplimentsService {

    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_sender: user_id
            }
        })

        return compliments;
    }


}

export {ListUserSendComplimentsService}
```
O user receive é a mesma estrutura, mas as unicas coisas que mudam seria em relação 
a receber as variaveis de user_send

Iremos agora criar os controllers do Receive e Send com os nomes:
- ListUserSendComplimentsController.ts
- ListUserReceiveComplimentsController.ts

No controller iremos criar um handle para recuperar o user_id do request e passar ele para o execute e fazer o return dele
```js
import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
    async handle(request: Request, response: Response){
        const { user_id } = request;
        const listUserSendComplimentsService = new ListUserSendComplimentsService();

        const compliments = await listUserSendComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserSendComplimentsController }
```

Mesma estrutura para o receiver, mas no caso só ira necessitar mudar o nome da classe, o import do service e sua utilização no await execute

E depois iremos por fim definir suas rotas em relação para fazer o método get tanto do sender e do receiver, importando seus controllers e definindo uma rota para cada um, e colocando o middleware de ensureAuthenticate para conseguir retornar os valores, pois como definimos na aplicação ele resgata o user_id através do request
```js
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
...
...
router.get("/users/compliments/send", ensureAuthenticated,listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated,listUserReceiveComplimentsController.handle)
```

e também iremos recuperar o relacionamentos da tabela que iremos pegar mudando no service, definindo umas opções relations

```js
    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        return compliments;
    }
```

### List Exists Tags - Service

Iremos fazer também um get de todas as tags que ira ter disponivel para o usuário, primeiro iremos criar um service com o nome de ListTagsServices.ts
Ele ira possuir uma estrutura básica simplesmente listando suas tags existentes com o .find do tagsRepositories
```js
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";


class ListTagsService {
    async execute(){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();

        return tags;

    }
}

export { ListTagsService }
```
Agora iremos criar um controller para poder manipular a questão do handle do get e assim retornamos as tags que o usuário ira ter disponivel na aplicação, a estrutura do controller, é somente usar o execute para retornar as tags existentes em json
```js
import { Request, Response} from "express";
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController{
    async handle(request: Request, response: Response){
        const listTagsService = new ListTagsService();

        const tags = await listTagsService.execute();

        return response.json(tags);
        
    }
    
}

export {ListTagsController}
```
E por fim criar uma rota get para as tags garantido que somente quem está autenticado ira utilizar essa rota, no caso usando o middleware de autenticação, e depois o controller.handle do ListTags
```js
const listTagsController = new ListTagsController();
...
...
router.get("/tags", ensureAuthenticated, listTagsController.handle); 
```

Caso a gente queira fazer uma costumização para personalizar as tags como inserir um # por exemplo, poderemos no ListTagsServices fazer um map do retorno .find do tagsRepositories afim de concatenar eles e colocar um name custom o # e o tag name e mudar para let afim de sobrescrever o que vem do banco

```js
        const tags = await tagsRepositories.find();
        tags.map(tag => (
            { ...tag, nameCustom: `#${tag.name}` }
            ))

        return tags;
```

Mas também existe uma biblioteca que tem a principal funcionalidade de personalizar entities da nossa aplicação, porque o TypeORM ele vai fazer toda a busca e só depois que a gente consegue manipular isso com informações que não estão no banco de dados, mas iremos utilizar Class Transform.

### Class Transform

O próprio nome ja diz, ela transforma uma classe, e então conseguimos passar algumas informações da nossa classe, e essa biblioteca tem um método chamado expose() que são atributos que ainda não foram lidos no typeORM, e iremos importar ele no nosso projeto

- yarn add class-transformer

E dentro da entidade Tag:
iremos importar de dentro do class-transformer o expose() e depois, iremos referenciar na classe Tag o Expose com o um name paraEle, e importamos uma função que é do tipo String, e dentro dele retornamos o valor do name com a hashtag no inicio
```js
import { Expose } from "class-transformer";

    @Expose({name: "nameCustom"})
    nameCustom(): string {
        return `#${this.name}`
    }
```

e dentro do Service do ListTagsService.ts, iremos importar do class-transformer o classToPlain que é o valor que ira retornar no class-transformer do entities Tag que seja no caso, o retorno da const do tags do .find do tagRepositories, ele vai criar novos objetos a partir do TypeORM e também vai adicionar o objeto do TypeORM

```js
import { Expose } from "class-transformer";

class ListTagsService {
    async execute(){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();

        return classToPlain(tags);

    }
}
```

A propriedade classToPlain ela basicamente vai dentro da entidade de Tag, e ela vai criar novos objetos que a partir do objeto que vão vir da const tags do TypeORM, e quando ela criar esses novos objetos, ela também vai adicionar o objeto do nameCustom

### List Users
E para finalizar a aplicação, iremos fazer um list de todos os usuários
Criaremos o service de ListUsersService.ts, com um async execute(), importando o userRepositories, chamando o método find, para retornar os users
```js
class ListUsersService {
    async execute(){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const users = await usersRepositories.find();

        return users;

    }
}
```

E depois criar um controller para manipular seu handle


E por ultimo criar uma rota, para acessar método Get, no meu projeto esse método só vai ser permitido por Admin

Para não reverlamos as senhas dos usuários utilizaremos o modo exclude() do class-transform
No entitites de User.ts, utilizaremos o método @Exclude importando do proprio class-transform
```js
import {Exclude} from "class-transformer";

    @Exclude()
    @Column()
    password: string;
```

Após isso importaremos o classToPlain novamente para criar o novo objeto do class-transform a partir do objeto Entitie password;

```js
import {classToPlain} from "class-transformer";

class ListUsersService {
    async execute(){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const users = await usersRepositories.find();

        return classToPlain(users);

    }
}
```

Project Done #NeverStopLearning 💪💪💪

</details>
