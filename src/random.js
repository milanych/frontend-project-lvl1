export const random2 = () => {
  const result = [];
  for (let x = 0; x < 2; x += 1) {
    result.push(Math.floor(Math.random() * 100));
  }
  return result;
};

export const random3 = () => {
  const result = [];
  for (let x = 0; x < 3; x += 1) {
    result.push(Math.floor(Math.random() * 100));
  }
  return result;
};

export const random6 = () => {
  const result = [];
  for (let x = 0; x < 3; x += 1) {
    result.unshift(Math.floor(Math.random() * 100)); // первые три
    result.push(Math.floor(Math.random() * 100)); // вторые три
  }
  return result;
};

export const random = () => {
  const prog = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const progressor = Math.floor(Math.random() + 10);
  return prog[progressor];
};
