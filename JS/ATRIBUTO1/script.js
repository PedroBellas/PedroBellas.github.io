/*Selecionando imagem*/
const img = document.querySelector('img');

/*Acessando os atributos do elemento, especifiando o src*/
/*Acessando atraves de uma string do atributo*/
console.log('getAttribute', img.getAttribute('src'));
/*Acessando direto pelo atributo*/
console.log('src', img.src);
/*Acessando como se fosse um array*/
console.log('["src"]', img['src']);

/*Acessando o alt*/
console.log('alt', img.alt);

/*Elemento imagem*/
console.log('Nodetype', img.nodeType);
console.log('NodeName', img.nodeName);

/*Pegando um atributos*/
const src = img.getAttributeNode('src');

console.log('Nodetype SRC', src.nodeType);
console.log('NodeName src', src.nodeName);
console.log('NodeValue', src.nodeValue);

/*Pegando um link*/
const link = document.querySelector('a');

console.log('href', link.href);
/*Pegar um filho atraves de um elemento*/
console.log('Pegando o filho: Nodetype', link.firstChild.nodeType);
console.log('Pegando o filho: NodeName', link.firstChild.nodeName);
console.log('Pegando o filho: NodeValue', link.firstChild.nodeValue);
/*Atribuindo um novo valor*/
link.firstChild.nodeValue = 'Novo texto';