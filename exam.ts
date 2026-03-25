type Weight = Record<string, number>;

type ExamData = {
  person?: string;
  student?: string;
  nome?: string;
  values?: Record<string, string>;
  respostas?: Record<string, string>;
};

export class Exam {
  private weight: Weight;
  private answer: ExamData;
  private answers: ExamData[];
  private notas: number[];

  constructor(answer: ExamData, weight: Weight) {
    this.weight = weight;
    this.answer = answer;
    this.answers = [];
    this.notas = [];
  }

  private getRespostas(data: ExamData): Record<string, string> {
    return data.values ?? data.respostas ?? {};
  }

  private calcularNota(aluno: ExamData): number {
    const gabarito = this.getRespostas(this.answer);
    const respostasAluno = this.getRespostas(aluno);

    let nota = 0;

    for (const questao in gabarito) {
      if (respostasAluno[questao] === gabarito[questao]) {
        nota += this.weight[questao] ?? 0;
      }
    }

    return nota;
  }

  public add(respostas: ExamData): void {
    this.answers.push(respostas);
    this.notas.push(this.calcularNota(respostas));
  }

  public avg(): number {
    if (this.notas.length === 0) return 0;
    const total = this.notas.reduce((acc, nota) => acc + nota, 0);
    return total / this.notas.length;
  }

  public min(): number[] {
    if (this.notas.length === 0) return [];
    const menor = Math.min(...this.notas);
    return this.notas.filter(nota => nota === menor);
  }

  public max(): number[] {
    if (this.notas.length === 0) return [];
    const maior = Math.max(...this.notas);
    return this.notas.filter(nota => nota === maior);
  }

  public lt(value: number): number[] {
    return this.notas.filter(nota => nota < value);
  }

  public gt(value: number): number[] {
    return this.notas.filter(nota => nota > value);
  }
}