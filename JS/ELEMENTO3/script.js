/*Pegando o elemento formulario*/
const f1 = document.forms;
const f2 = document.forms[0];
const f3 = document.getElementsByName('pesquisa');
/*Usando o name no HTML para pegar elementos*/
const ff = document.pesquisa;
console.log(ff);
/*Modificando valores dos campos do formulario*/
document.pesquisa.q.value = 'Pedro';
document.pesquisa.hl.value = "en-us";
