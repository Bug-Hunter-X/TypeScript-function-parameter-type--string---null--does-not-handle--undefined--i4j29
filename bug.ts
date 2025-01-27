function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!

// The bug is that the function does not handle undefined values.
console.log(greet(undefined)); // Output: Error: Argument of type 'undefined' is not assignable to parameter of type 'string | null'.