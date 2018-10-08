function sum(a, b) {
  console.log('this is', this);
  return a + b;
}

sum(5, 8);
