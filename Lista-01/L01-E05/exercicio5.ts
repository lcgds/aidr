console.log('Exercício 5) Uma pessoa com pouco tempo disponível joga uma partida de CS de 30 minutos a cada dia, 3 dias por semana. Monte a fórmula e escreva um programa que calcule e exibe na tela quanto tempo, em horas, a pessoa terá dedicado ao jogo ao final de um ano.');

//30min por dia durante 3 dias = 90min por semana
//1 ano = 52 semanas

let minutos: number = 52 * 90;

//Minutos -> Horas

let horas: number = minutos / 60;

console.log('Resultado: ' + horas + ' horas no CS por ano.');