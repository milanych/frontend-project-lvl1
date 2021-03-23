import readlineSync from 'readline-sync';
import { random3, name, even } from '../src/index.js';

console.log(`Hello, ${name}\nAnwser "yes" if number is even, otherwise answer "no".`);
even();
