const name = readlineSync.question(
  "Welcome to the Brain Games!\nMay I have your name? "
);

const result = () => `Hello, ${name}!`;
export default result;
