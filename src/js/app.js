'use strict';

const btnCalcular = document.querySelector('#btnCalcular');

btnCalcular.addEventListener('click', () => {
	let potencia = document.querySelector('#potencia').value;
	let horas = document.querySelector('#horas').value;

	if (potencia === '' ||  horas === '') {
		swal('Ops...', 'Informe a potência do seu ar-codicionado e as horas de uso corretamente', 'error');
		return;
	}

	potencia = parseInt(potencia);
	horas = parseInt(horas);

	if (horas === 0 || horas > 24) {
		swal('Ops...', 'Informe as horas de uso corretamente', 'error');
		return;
	}

	// Converte para quilowatt
	potencia = potencia / 1000;

	// Fórmula: potência * horas de uso * capacidade de rendimento médio * dias do mês * preço médio do quilowatt
	let resultado = potencia * horas * 0.7 * 30 * 0.45;

	if (resultado !== 'NaN') {
		document.querySelector('#result').innerHTML = `<h1>R$ ${resultado.toFixed(2).replace('.',',')} mensais.</h1>`;
		clearInputs();
	}

});

function clearInputs() {
	document.querySelector('#potencia').value = '';
	document.querySelector('#horas').value = '';
}