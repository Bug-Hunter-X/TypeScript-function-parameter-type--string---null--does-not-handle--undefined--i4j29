# TypeScript Function Parameter Type 'string | null' Does Not Handle 'undefined'

This repository demonstrates a common error in TypeScript where a function parameter type of `string | null` does not handle `undefined` values gracefully. The provided code shows the error and a solution for handling `undefined` inputs. 

## Problem

A TypeScript function accepting a parameter of type `string | null` will throw an error if an `undefined` value is passed.  This is because `undefined` is not included in the union type `string | null`.

## Solution

The solution is to modify the function parameter type to include `undefined`. This can be achieved by changing the parameter type to `string | null | undefined`.

## Usage

1. Clone this repository.
2. Run `tsc bug.ts` to compile the TypeScript code.
3. Run `node bug.js` to execute the code and observe the error.
4. Run `tsc bugSolution.ts` to compile the corrected TypeScript code.
5. Run `node bugSolution.js` to execute the corrected code and observe the successful handling of `undefined` values.
