const botao = document.querySelector('#hamburguer');
const menu = document.querySelector('#menu');


botao.onclick = function(e){

	if(botao.classList[1] == 'active-btn'){
		menu.classList.remove('active-menu');
		botao.classList.remove('active-btn');
	}
	else{
		menu.classList.add('active-menu');
		botao.classList.add('active-btn');	
	}

}