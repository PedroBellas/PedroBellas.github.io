/*
===========================
Declaração de elementos
===========================
*/

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

var valorHtml = 1;
const html1 = document.querySelector('#areaHtml1');
const html2 = document.querySelector('#areaHtml2');
const anteriorHtml = document.querySelector('#anteriorHtml');
const proximoHtml = document.querySelector('#proximoHtml');

var valorCss = 1;
const css1 = document.querySelector('#areaCss1');
const css2 = document.querySelector('#areaCss2');
const css3 = document.querySelector('#areaCss3');
const css4 = document.querySelector('#areaCss4');
const css5 = document.querySelector('#areaCss5');
const css6 = document.querySelector('#areaCss6');
const anteriorCss = document.querySelector('#anteriorCss');
const proximoCss = document.querySelector('#proximoCss');

var valorJs = 1;
const js1 = document.querySelector('#areaJs1');
const js2 = document.querySelector('#areaJs2');
const anteriorJs = document.querySelector('#anteriorJs');
const proximoJs = document.querySelector('#proximoJs');

const menuItens = document.querySelectorAll('.menu a[href^="#"]');

menuItens.forEach(item => {
	item.addEventListener('click', scrollSuave);
});

function scrollSuave(event){

	event.preventDefault();

	const valorMenu = event.target.getAttribute('href');
	const secao = document.querySelector(valorMenu);

	window.scroll({

		/*560 = tamanho do banner principal*/
		/*80 =  o menu fixo*/

		top: secao.offsetTop + 560 - 80,
		behavior: "smooth",
	});

}


/*
===========================
Animação das bolinhas
===========================
*/

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

/*
===========================
Animação do botão
===========================
*/

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

/*
===========================
Animação do load
===========================
*/

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

/*
===========================
Animação de scroll 
===========================
*/

window.onscroll = function(e){

	/*Pega o ponto de cima
	/*Pegando a posição de um elemento
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

/*
===========================
Animação da bolinha correndo
===========================
*/


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

/*
===========================
Funções gerais Slider
===========================
*/

function reaparecer(e){
	e.classList.remove('desaparecer');
}

function desaparecer(e){
	e.classList.add('desaparecer');
}

/*
===========================
Slider HTML
===========================
*/

anteriorHtml.onclick = function(){

	if (valorHtml == 1) {

		desaparecer(html1);
		reaparecer(html2);
		valorHtml = 2;
	}
	else if(valorHtml == 2){
		desaparecer(html2);
		reaparecer(html1);
		valorHtml--;	
	}

}
proximoHtml.onclick = function(){

	if (valorHtml == 1) {

		desaparecer(html1);
		reaparecer(html2);
		valorHtml++;
	}
	else if(valorHtml == 2){
		desaparecer(html2);
		reaparecer(html1);
		valorHtml = 1;	
	}

}


/*
===========================
Slider CSS
===========================
*/

anteriorCss.onclick = function(){

	if (valorCss == 1) {

		desaparecer(css1);
		reaparecer(css6);
		valorCss = 6;
	}
	else if(valorCss == 2){
		desaparecer(css2);
		reaparecer(css1);
		valorCss--;	
	}
	else if(valorCss == 3){
		desaparecer(css3);
		reaparecer(css2);
		valorCss--;		
	}
	else if(valorCss == 4){
		desaparecer(css4);
		reaparecer(css3);
		valorCss--;		
	}
	else if(valorCss == 5){
		desaparecer(css5);
		reaparecer(css4);
		valorCss--;		
	}
	else if(valorCss == 6){
		desaparecer(css6);
		reaparecer(css5);
		valorCss--;		
	}

}
proximoCss.onclick = function(){

	if (valorCss == 1) {

		desaparecer(css1);
		reaparecer(css2);
		valorCss++;
	}
	else if(valorCss == 2){
		desaparecer(css2);
		reaparecer(css3);
		valorCss++;	
	}
	else if(valorCss == 3){
		desaparecer(css3);
		reaparecer(css4);
		valorCss++;	
	}
	else if(valorCss == 4){
		desaparecer(css4);
		reaparecer(css5);
		valorCss++;	
	}
	else if(valorCss == 5){
		desaparecer(css5);
		reaparecer(css6);
		valorCss++;	
	}
	else if(valorCss == 6){
		desaparecer(css6);
		reaparecer(css1);
		valorCss = 1;	
	}

}

/*
===========================
Slider JS
===========================
*/

anteriorJs.onclick = function(){

	if (valorJs == 1) {

		desaparecer(js1);
		reaparecer(js2);
		valorJs = 2;
	}
	else if(valorJs == 2){
		desaparecer(js2);
		reaparecer(js1);
		valorJs--;	
	}

}
proximoJs.onclick = function(){

	if (valorJs == 1) {

		desaparecer(js1);
		reaparecer(js2);
		valorJs++;
	}
	else if(valorJs == 2){
		desaparecer(js2);
		reaparecer(js1);
		valorJs = 1;	
	}

}
