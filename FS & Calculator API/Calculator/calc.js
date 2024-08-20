const sum = (a, b) => {
  return console.log(`Sum a+b = ${Number(a) + Number(b)}`);
};

const sub = (a, b) => {
  return console.log(`Subtraction a-b = ${a - b}`);
};

const multi = (a, b) => {
  return console.log(`Multiplication a*b = ${a * b}`);
};

const div = (a, b) => {
  return console.log(`Divison a/b = ${a / b}`);
};

module.exports = { sum, sub, multi, div };
