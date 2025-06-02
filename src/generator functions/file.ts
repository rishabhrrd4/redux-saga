function* generatorFnOne() {
  yield 1;
  yield 2;
  return 3;
}

console.log(generatorFnOne().next());
console.log(generatorFnOne().next());
console.log(generatorFnOne());

export default generatorFnOne();
