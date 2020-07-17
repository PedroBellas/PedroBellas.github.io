/*Extremamente parecido com o Jquery*/
document.querySelector('#primeiro').classList.add('destaque');

/*Retorna um Node List, sempre recomendavel transformar em array*/
Array.from(document.querySelectorAll('div')).forEach(e => e.classList.remove('destaque'));

/*Trabalhando com funções*/

const selecionar = seletor => Array.from(document.querySelectorAll(seletor)).forEach(e => e.classList.add('destaque'));
const deselecionar = seletor => Array.from(document.querySelectorAll(seletor)).forEach(e => e.classList.remove('destaque'));

selecionar('div');
deselecionar('*');
selecionar('.terceiro.ultimo');
deselecionar('*');
selecionar(':not(#primeiro)');
deselecionar('*');
selecionar(':nth-child(1)');
deselecionar('*');
selecionar('div:nth-of-type(1)');
deselecionar('*');
selecionar('[wm-moderna]');
