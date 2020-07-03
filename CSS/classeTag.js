const colors = {
	p: '#388e3c',
	div: '#1565c0',
	span: '#e53935',
	section: '#f67809',
	ul: '#5e35b1',
	ol: '#fbc02d',
	header: '#d81b60',
	nav: '#64dd17',
	main: '#00acc1',
	footer: '#304ffe',
	form: '#9f6581',
	body: '#25b6da',
	padrao: '#616161',
	get(tag){
		return this[tag] ? this[tag] :this.padrao;
	}
}

document.querySelectorAll('.tag').forEach(tag => {

	const tagName = tag.tagName.toLowerCase();

	tag.style.borderColor = colors.get(tagName);

	if(!tag.classList.contains('nolabel')){

		const label = document.createElement('label');
		label.style.backgroundColor = colors.get(tagName);
		label.innerHTML = tagName;
		tag.insertBefore(label, tag.childNodes[0]);

	}

});