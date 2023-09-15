# TypeScript para Angular

## Anotações de estudos de Typescript


### comandos:
    - node caminho/nomeDoArquivo.js - Roda o arquivo JS
    - npx tsc caminho/nomeDoArquivo.tsx - Transpila o arquivo ts para JS
    - npx tsc --init -  Cria o TSConfig que é o arquivo de configuração do Typescript
    - npx tsc - compila todos os arquivos tsx que estão na pasta configuradada no rootDir do tsconfig. Os arquivos js
    vão para a pasta configurada no outDir do tsconfig

### Tipos primitivos
    boolean, number, string
    - Tipos especias
    null e undefined (para tipos null e undefined só são aceitos valores null e undefined)

### Tipos abrangentes: 
    Any = Qualquer coisa (tilizado para funções com retorno não previsivel)
    void = vazio (muito utilizados em funções que executam coisas mas não tem retorno)

### Objects
    Objetos não tem uma forma pré definida.
    Um tipo objeto aceita qualquer valores dentro de um objeto.
    Não é uma boa prática usar objetos sem previsibilidade. É importante usar um objeto com elemntos tipados nele.

### Arrays
    Existem duas formas de declarar um array no ts:

    ```let array: string[] = ["dado1", "dado2"]```js
   ```let array2 : Array<String> = ["dado1", "dado2"]```js

    Podemos criar arrays com mais de um tipo:
    ```let arrayMulti: (string : number) = ["texto", 2, "outro texto", 10]```js (Esse array só recebe string e number)

### Tuplas

    Tuplas são vetores de mais de um tipo com locais certos para inserir os dados. 

    ```let tupla: [string, number, number] = ["conta 100, 200]```js (correto)
    ```let tupla: [string, number, number] = [100, conta, 200]```js (dá erro)

    No TS os mesmos métodos de array do JS podem ser utilizados.

### Datas

    São sempre criadas no padrão americanos para serem formatadas posteriormente.
    let aniversario: Date = new Date(2023-09-16)

### Funções

    A diferença das funções em ts para o js é que podemos tipar o retorno das funções e os parâmetros.
    
    ```
    function soma(x:number, y:number): number {
        return x + y;
    }
    ```js

    Caso não coloquemos o tipo do retorno da função, o TS entende o tipo pelo que ela retorna. Será tipada implicitamente.

### Funções multi tipos

    Caso não se saiba qual o tipo do retorno da função podemos usar a função multi tipos:

    ```
    function multi(param : number | string) : number | string {
        return parm
    }
    ```js

### Funções Assíncronas

    As funções assíncronas no JS retornam promisses. Para tipar essas funções podemos tipar com o retorno Promisse e o
    tipo de promisse que será retornado

    ```
    async function getDatabase(id: number) : Promisse<String> {
        return "valor retornado";
    }
    ```js

### Interfaces

    Interfaces são utilizadas para trabalhar com classes. È um contrato que precisa ser seguido por quem a extende.
    Interfaces e tipos podem ter propriedades somente leitura (propriedade que não pode ser modificada após a criação) 
    e multi tipos.

    Quando as interfaces são convertidas para JS elas viram objetos assim com os types também viram. As interfaces são
    mais importantes em tempo de desenvolvimento.