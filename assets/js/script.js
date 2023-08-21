

function clicou() {
	const test = document.querySelector('#test');
	const ul = test.querySelector('ul');
	let adcint = document.createElement("li");
	adcint.innerText = "aborada adicionada";
	ul.appendChild(adcint);
	
}

