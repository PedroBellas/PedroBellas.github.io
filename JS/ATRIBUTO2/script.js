/*Pegando a lista com um seletor especifico (o melhor é usar o ID)*/
const lista = document.querySelector('div ul[destino="escritorio"]');

console.log('childNodes', lista.childNodes);
console.log('id', lista.id);
console.log('destino por ponto', lista.destino);
/*Agora com o getAttribute funciona*/
console.log('getAttribute destino', lista.getAttribute('destino'));
/*Verifica se o atributo está presente*/
console.log('hasAttribute destino', lista.hasAttribute('destino'));
/*Mudando o valor do atributo*/
lista.setAttribute('destino', 'empresa');
console.log('destino att', lista.getAttribute('destino'));
/*Criando um novo atributo*/
lista.setAttribute('status', 'aberto');
console.log('Criado status:', lista.getAttribute('status'));
/*Removendo o atributo*/
lista.removeAttribute('destino');
console.log('destino rmv', lista.hasAttribute('destino'));
/*Existe diferença entre atributos que começam com data-*/
console.log(lista.dataset);
lista.setAttribute('data-nome', 'pedrinho');
console.log('data nova', lista.dataset);
lista.dataset.urgencia = 'n';
console.log('data att', lista.dataset);
