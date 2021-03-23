import readlineSync from 'readline-sync';
import { name, prime } from '../src/index.js';

console.log(`Hello, ${name}!\nAnswer 'yes' if given number is prime. Otherwise answer 'no'.`);
prime();
