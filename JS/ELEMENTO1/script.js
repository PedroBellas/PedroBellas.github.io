/*Adicionando uma classe para um elemento com ID primeiro*/
document.getElementById('primeiro').classList.add('destaque');


/*Selecionando elementos pelo nome da Tag*/
const divs = document.getElementsByTagName('div');

/*Convertendo o HTMLCollection em um Array*/
/*Forma 1*/
Array.from(divs).forEach(e => e.classList.remove('destaque'));
/*Forma 2 (usando operador spread)*/
const divsArray = [...divs];
divsArray.forEach(e => e.classList.add('destaque'));

/*Pegando elementos atraves da Classe*/
const ultimosElementos = document.getElementsByClassName('ultimo');
/*Forma 3 (Não converte diretamente em um array, mas é possivel trabalhar)*/
for(let e of ultimosElementos){
	e.classList.remove('destaque');
}