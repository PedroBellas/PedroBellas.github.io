/*Só pra demonstrar a flexibilidade do Javascript*/
function log () {
	console.log(this);
}

/*Todos esses elementos agora se chamar a função log será exibido no console*/
HTMLCollection.prototype.log = log;
HTMLElement.prototype.log = log;
NodeList.prototype.log = log;
Node.prototype.log = log;


const lista = document.querySelector('div ul');
/*Selecionando o pai da lista*/
lista.parentNode.log();
/*Selecionando os 3 lis da lista*/
lista.childNodes.log();
/*os espaços são elementos de textos igual acontece ao display: inline-block;*/

/*Selecionando o primeiro item da lista*/
const primeiro = lista.firstChild;
primeiro.log(); /*O texto espaço de texto em branco*/
primeiro.nextSibling.log(); /*´pega o Pedro*/

const ultimo = lista.lastChild;
ultimo.log(); /*O texto espaço de texto em branco*/
ultimo.previousSibling.log(); /*Pega a Bia*/

/*Pega os filhos mas sem o espaço em branco*/
lista.children.log();
lista.firstElementChild.log();
lista.lastElementChild.log();