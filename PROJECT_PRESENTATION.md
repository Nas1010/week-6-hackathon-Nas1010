# Fibonacci Forest

## Overview

This project aims to implement a function that efficiently calculates the nth Fibonacci number, providing a foundation for beginners to understand recursion, loops, and error handling in programming. The function is designed to handle positive integers and will throw an error if given a negative number as input.

The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. The sequence begins as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 .... This challenge encourages understanding and implementing algorithms that calculate Fibonacci numbers iteratively, ensuring efficiency for larger values of n.

To test your function, remember to save your changes and run `npm run test` in your terminal.

- Kata Available: main.js
- Tests Available: main.test.js

## Planning Phase

- Disney Ideation: Dreamer, Realistic and Critic phase to narrow down on challenge.
- Create Tests Using TDD Structure (Test Driven Development).
- Testing framework: Vitest
- Begin by writing tests for the Fibonacci function before implementation.
- Use TDD to ensure the function behaves as expected for both valid and invalid inputs (positive integers and negative numbers).
- Write tests for edge cases, such as fibonacci(0) and fibonacci(1).
- MVP 1: Ensure the test covers normal cases (positive integers)
- MVP 2: Ensure the test covers edge case (negative numbers, zero, etc.).
- Stretch: Ensure the test covers BigInt.

### Progress Tracking

- MVP 1 complete
- MVP 2 complete

### Technical Documentation

- Testing Framework: Vitest
- Language: JavaScript
- Kata Available: main.js
- Tests Available: main.test.js


### Challenges & Solutions

- Challenge: I was using .toThrowError incorrectly.
- Solution: After reviewing the Vitest documentation, I discovered that the function passed to .toThrowError must be wrapped in an anonymous function (e.g., () => functionCall()) to properly catch the error.
- Status: Resolved

## Next Steps

- Stretch: Ensure the test covers BigInt.
