export class Answer {
    private nome: string;
    private respostas: string[];

    constructor(nome: string, respostas: string[]) {
        this.nome = nome;
        this.respostas = respostas;
    }

    public getNome(): string {
        return this.nome;
    }

    public getRespostas(): string[] {
        return this.respostas;
    }
}

export class Weight {
    private pesos: number[];

    constructor (vetorPesos: number[]) {
        this.pesos = vetorPesos;
    }

    public getPesos(): number[] {
        return this.pesos;
    }
} 