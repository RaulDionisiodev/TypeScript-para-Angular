type heroi = {
    nome: string,
    vulgo: string
}

function printaObjeto(pessoa: heroi) {
    console.log(pessoa)
}

printaObjeto({
    nome: "Peter Parker",
    vulgo: "Homem Aranha"
})


//Exemplo de generics

function concatArray<T>(...params: T[]): T[] {
    return new Array().concat(...params)
}

const numeros = concatArray<number[]>([1, 3], [5]);
const letras = concatArray<string[]>(["esse"], ["Aceita", "strings"])