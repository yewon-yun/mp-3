import { useState } from "react";

export default function useCalculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [output, setOutput] = useState("");

    function calculate(op) {
        const a = Number(num1);
        const b = Number(num2);
        let result;

        if (op === "+") {
            result = a + b;
        } else if (op === "-") {
            result = a - b;
        } else if (op === "*") {
            result = a * b;
        } else if (op === "/") {
            result = a / b;
        } else if (op === "**") {
            result = 1;
            for (let i = 0; i<b; i++){
                result *= a;
            }
        }
        setOutput(result);
    }

    function doClear() {
        setNum1("");
        setNum2("");
        setOutput("");
    }

    return {num1, setNum1, num2, setNum2, output, calculate, doClear};
}