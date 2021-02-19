//Importar ReadLine-Sync
import * as rs from 'readline-sync';

//Declarar variáveis
const message: string = 'Olá, mundo! Meu número preferido é ';
let favNumber: number = 6;
const flag: boolean = true;
let anything: any;

//Imprimir no console
console.log(message + favNumber + '.');


//Teste de ReadLine-Sync
const name: string = rs.question('Digite seu nome: ');
console.log('Olá, ' + name + '!');