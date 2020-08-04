const botao = document.querySelector('#hamburguer');
const menu = document.querySelector('#menu');
const bar = document.querySelector('#progress-bar');
const lBox = document.querySelector('#loading');
const ulBall = document.querySelector("ul.ball");
const corpo = document.querySelector("body");

const area1 = document.querySelector('#area1');
const area2 = document.querySelector('#area2');
const area3 = document.querySelector('#area3');

const btnTerm = document.querySelector('#terms-btn');
const termsArea = document.querySelector('#terms-full-area');
const btnNoTerm = document.querySelector('#no-terms-btn');
const btnYesTerm = document.querySelector('#yes-terms-btn');
const archiveArea = document.querySelector('#archive-area');


for(let i = 0; i < 15; i++){

	const li = document.createElement("li");
	ulBall.appendChild(li);

	const position = Math.random() * (75) + 1;
	const time = Math.random() * (5 - 0.1) + 0.1;
	const start = Math.random() * (20 - 10) + 10;

	li.style.left = position+"%";
	li.style.animationDelay = time+"s";
	li.style.animationDuration = start+"s";
}

botao.onclick = function(){

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

corpo.onload = function(){

	bar.classList.add('full');

	setTimeout(load, 5200);

}

function show(e) {
	e.classList.add('slow-show');
}

function hidd(e){
	e.classList.remove('slow-show');	
}

/*Scroll*/

window.onscroll = function(e){

	/*Pega o ponto de cima
	console.log(window.scrollY);

	/*Pegando a posição de um elemento
	console.log(document.querySelector('#test').getBoundingClientRect());

	/*Fazendo a comparação*/

	if(window.scrollY > area1.getBoundingClientRect().y){
		show(area1);

		if (window.scrollY > area2.getBoundingClientRect().y + area1.getBoundingClientRect().height) {
			show(area2);

			if (window.scrollY > area3.getBoundingClientRect().y + area2.getBoundingClientRect().height + area3.getBoundingClientRect().height) {
				show(area3);
			}
			else{
				hidd(area3);
			}
		}
		else{
			hidd(area2);
		}
	}
	else{
		hidd(area1);
	}

}

btnTerm.onclick = function(){

	termsArea.classList.add('show-area');

}

btnNoTerm.onclick = function(){

	termsArea.classList.remove('show-area');

}

btnYesTerm.onclick = function(){

	termsArea.classList.remove('show-area');
	archiveArea.classList.add('show-area');
	btnTerm.classList.remove('show-area');

}