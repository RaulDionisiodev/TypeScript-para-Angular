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

/*
    comandos:
    - node caminho/nomeDoArquivo.js - Roda o arquivo JS
    - npx tsc caminho/nomeDoArquivo.tsx - Transpila o arquivo ts para JS
    - npx tsc --init -  Cria o TSConfig que é o arquivo de configuração do Typescript
    - npx tsc - compila todos os arquivos tsx que estão na pasta configuradada no rootDir do tsconfig. Os arquivos js
    vão para a pasta configurada no outDir do tsconfig
*/ 