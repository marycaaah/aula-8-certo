// const esta informando nome, nota e tur
const alunos = [
    {nome: 'joao',
     nota: 5,
    turma: '18',},

    {nome: 'sofia',
     nota: 9,
    turma: '1B',},

    {nome:'Paulo',
     nota: 6,
    turma: '2c' ,}
// função está declarando a estrutura "for" que declara o nome, e a "if" que declara media.
];
function alunosAprovados(alunos, media) {
    let aprovados = [];
    for (let i = 0; i < alunos.length; i++){
         let{nota, nome} = alunos[i];
         if (nota >= media){
            aprovados.push(nome);
         }
    }
    return aprovados;
}
// console.log e alert esta informando se o aluno que tirou acima de 5 foi aprovado
console.log(alunosAprovados( alunos, 5));
alert(alunosAprovados( alunos, 5));