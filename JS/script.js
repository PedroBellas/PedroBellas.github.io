const botao = document.querySelector('#hamburguer');
const menu = document.querySelector('#menu');
const bar = document.querySelector('#progress-bar');
const lBox = document.querySelector('#loading');
const ulBall = document.querySelector("ul.ball");
const corpo = document.querySelector("body");

const area1 = document.querySelector('#area1');
const area2 = document.querySelector('#area2');
const area3 = document.querySelector('#area3');

const runningBall = document.querySelector('#run-ball');

const idHtml = document.querySelector('#html');
const idCss = document.querySelector('#css');
const idJs = document.querySelector('#js');
const areaHtml = document.querySelector('#html-area');
const areaCss = document.querySelector('#css-area');
const areaJs = document.querySelector('#js-area');

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


function die(){
	runningBall.style.display = "none";
}

runningBall.onclick = function(){
	const ballSon = document.querySelectorAll('#run-ball span');

	var number = ballSon.length;
	
	if(number == 7){

		runningBall.classList.add('die-ball');
		setTimeout(die, 4000);

	}
	else{

		const span = document.createElement("span");
		runningBall.appendChild(span);

		var value = (number + 1) * 5;

		span.style.filter = 'blur('+value+'px)';

	}
}


/*Area de id e area*/
idHtml.onclick = function(){

	if(areaHtml.classList[2] == 'drop-down-area'){

		areaHtml.classList.remove('drop-down-area');		

	}
	else{

		areaHtml.classList.add('drop-down-area');

	}
}

idCss.onclick = function(){

	if(areaCss.classList[2] == 'drop-down-area'){

		areaCss.classList.remove('drop-down-area');		

	}
	else{

		areaCss.classList.add('drop-down-area');

	}
}

idJs.onclick = function(){

	if(areaJs.classList[2] == 'drop-down-area'){

		areaJs.classList.remove('drop-down-area');		

	}
	else{

		areaJs.classList.add('drop-down-area');

	}
}