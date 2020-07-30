const botao = document.querySelector('#hamburguer');
const menu = document.querySelector('#menu');
const bar = document.querySelector('#progress-bar');
const lBox = document.querySelector('#loading');
const ulBall = document.querySelector("ul.ball");
const corpo = document.querySelector("body");

for(let i = 0; i < 15; i++){

	const li = document.createElement("li");
	ulBall.appendChild(li);

	const position = Math.random() * (90 - 1) + 1;
	const time = Math.random() * (5 - 0.1) + 0.1;
	const start = Math.random() * (20 - 10) + 10;

	li.style.left = position+"%";
	li.style.animationDelay = time+"s";
	li.style.animationDuration = start+"s";
}

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

function load() {
	lBox.classList.add('hidden');
}

corpo.onload = function(e){

	bar.classList.add('full');

	setTimeout(load, 5200);

}

