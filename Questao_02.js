let senha = 'Ya3'; // aletrar a senha para testar
let validacoes = 0; // quantidade de validações que foi utilizada na senha

if (/[!@#$%^&*()-+]/.test(senha)) ++validacoes;
if (/[A-Z]/.test(senha)) ++validacoes;
if (/[a-z]/.test(senha)) ++validacoes;
if (/[0-9]/.test(senha)) ++validacoes;

if (senha.length >= 6 && validacoes == 4){
    console.log('Senha salva com sucesso');
} else if (senha.length < 6 && validacoes == 4){
    console.log(6 - senha.length);
} else if (senha.length >= 6 && validacoes < 4){
    console.log(4 - validacoes);
} else if (senha.length < 6 && validacoes < 4){
    console.log(Math.max(6 - senha.length, 4 - validacoes));
}