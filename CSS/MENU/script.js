window.onhashchange = function(e) {
	/*Pegando as URLS*/
	const oldURL = e.oldURL.split('#')[1];
	const newURL = e.newURL.split('#')[1];
	
	/*Pegando os componentes do HTML*/
	const oldMenu = document.querySelector(`.menu [href='#${oldURL}']`);
	const newMenu = document.querySelector(`.menu [href='#${newURL}']`);

	/*Adicionando a classe selected*/
	oldMenu && oldMenu.classList.remove('selected');
	newMenu && newMenu.classList.add('selected');

}