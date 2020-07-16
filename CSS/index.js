document.querySelectorAll('[wm-folder]').forEach(folder => {

		folder.style.cursor = 'pointer';

		folder.onclick = function(e) {

			const ul = folder.nextElementSibling;
			const dis = ul.style.display;
			const cor = folder.style.background;

			if(cor === 'rgb(28, 173, 230)'){

				folder.style.background = '#1E85FE';

			}
			else{

				folder.style.background = '#1CADE6';

			}

			if(dis === 'block'){
				ul.style.display = 'none';
			}
			else{
				ul.style.display = 'block';	
			}

		}

	});