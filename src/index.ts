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


//Exemplo de decorators

function ExibirNome(target: any) {
    console.log(target)
}

@ExibirNome
class Funcionario { }

// Exemplo de class decorartors
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version }) //Adiciona uma propriedade para a classe dinâmicamente
    }
}


// Exemplo de attribute decorator

function miniLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key]

        const getter = () => _value;

        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            }
            _value = value;
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}
@apiVersion("1.10")
class Api {
    @miniLength(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }

}


