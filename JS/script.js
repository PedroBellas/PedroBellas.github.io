const botao = document.querySelector('#hamburguer');

botao.onclick = function(e){

	if(botao.classList[1] == 'active-btn'){
		botao.classList.remove('active-btn');
	}
	else{
		botao.classList.add('active-btn');	
	}

}