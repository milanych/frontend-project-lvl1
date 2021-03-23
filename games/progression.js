import readlineSync from 'readline-sync';
import { name, progression } from '../src/index.js';

console.log(`Hello, ${name}!\nWhat number is missing in the progression?`);
progression();
