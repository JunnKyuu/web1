let product = {
  number: 123,
  string: 'jun',
  boolean: true,
  array: [10, 20, 30, 40],
  method: function() {
    console.log(`${this.string}`);
  }
};

product.method();