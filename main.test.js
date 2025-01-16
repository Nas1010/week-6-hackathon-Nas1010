import { test, expect, describe } from "vitest";
import { fibonacci } from "./main.js";

describe("Fibonacci tests for positive and negative integers", () => {
    test("should return the correct responses for fibonacci integers", () => {
        const fibOne = fibonacci(0);
        const fibTwo = fibonacci(12);
        const fibThree = fibonacci(7);
        const fibFour = fibonacci(73);
        const fibFive = fibonacci(1);


        const fibOneExpected = 0;
        const fibTwoExpected = 144;
        const fibThreeExpected = 13;
        const fibFourExpected = 806515533049393;
        const fibFiveExpected = 1;

        expect(fibOne).toBe(fibOneExpected);
        expect(fibTwo).toBe(fibTwoExpected);
        expect(fibThree).toBe(fibThreeExpected);
        expect(fibFour).toBe(fibFourExpected);
        expect(fibFive).toBe(fibFiveExpected);
    
    })

    test("should not accept negative integers", () => {
   
        expect(() => fibonacci(-1)).toThrowError();
        expect(() => fibonacci(-12)).toThrowError();
        expect(() => fibonacci(-7)).toThrowError();
    });
});