#! /usr/bin/env node

'use strict';

const meow = require('meow');
const EFICIENCIA_AR_CONDICIONADO = 0.7;
const DIAS_MES = 30;
const VALOR_MEDIO_QUILOWATT = 0.85;

const cli = meow(`
    Modo de uso:
      $ gasto-ar <potencia-do-ar-condicionado> <horas-de-uso-diario>

    Exemplo:
      $ gasto-ar 680 8

`, {});

if (cli.input.lenght > 2) {
	console.log('Muitos parâmetros encontrados. Informe apenas a potência e as horas de uso do ar-condicionado.');
	return;
}

let potencia = cli.input[0];
let horas = cli.input[1];

if (typeof potencia !== 'number' || typeof horas !== 'number') {
	console.log('Informe a potência do seu ar-codicionado e as horas de uso corretamente');
	return;
}

if (horas === 0 || horas > 24) {
	console.log('Informe as horas de uso corretamente');
	return;
}

// Converte para quilowatt
potencia = potencia / 1000;

// Fórmula: potência * horas de uso * capacidade de rendimento médio * dias do mês * preço médio do quilowatt
let resultado = potencia * horas * EFICIENCIA_AR_CONDICIONADO * DIAS_MES * VALOR_MEDIO_QUILOWATT;

console.log(`O gasto médio do seu ar-codicionado é de aproximadamente R$ ${resultado.toFixed(2).replace('.',',')} mensais.`);
