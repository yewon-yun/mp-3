import styled from "styled-components";
import useCalculator from "../hooks/useCalculator.js";

const StyledCalculator = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .calculator {
    background-color: #f1cbcb;
    width: 50%;
    border: 1px solid #bb6363;
    border-radius: 20px;
    padding: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    font-family: 'Londrina Outline';
  }

  h2 {
    color: #bb6363;
    padding-bottom: 1%;
    font-size: calc(1px + 3vw);
  }

  .calc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .ins {
    padding-bottom: 3%;
    display: flex;
  }

  .ins input {
    border: 2px solid #bb6363;
    border-radius: 5px;
    height: 5vh;
    display: flex;
    text-align: center;
    width: 50%;
  }

  .buttons button {
    background-color: floralwhite;
    border: 2px solid #bb6363;
    color: #bb6363;
    width: 30%;
    height: calc(1px + 3vh);
    border-radius: 10px;
    font-size: calc(1px + 1vw);
    text-align: center;
  }

  #output {
    border: 2px solid #bb6363;
    border-radius: 10px;
    background-color: white;
    width: 40%;
    margin-top: 2%;
    padding: 3% 4%;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  @media screen and (max-width: 1000px) {
    .calculator {
      width: 60%;
    }

    h2 {
      font-size: calc(2px + 5vw);
    }

    .buttons button {
      font-size: calc(1px + 1.5vw);
    }

    .ins input {
      font-size: calc(1px + 2vw);
    }
  }

  @media screen and (max-width: 750px) {
    .calculator {
      width: 80%;
    }

    h2 {
      font-size: calc(3px + 6vw);
    }

    .buttons button {
      font-size: calc(1px + 2vw);
      width: 40%;
      padding: 2%;
    }
  }
`;

export default function Calculator() {
    const {num1, setNum1, num2, setNum2, output, calculate, doClear} = useCalculator();
    const outputColor = output < 0 ? "red" : "brown";

    return (
        <StyledCalculator>
            <div className="calculator">
                <h2>Calculator!</h2>

                <div className="calc">
                    <div className="ins">
                        <input
                            type="text"
                            placeholder="first number"
                            value={num1}
                            onChange={(e) => setNum1(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="second number"
                            value={num2}
                            onChange={(e) => setNum2(e.target.value)}
                        />
                    </div>

                    <div className="buttons">
                        <button onClick={() => calculate("+")}>+</button>
                        <button onClick={() => calculate("-")}>-</button>
                        <button onClick={() => calculate("*")}>*</button>
                        <button onClick={() => calculate("/")}>/</button>
                        <button onClick={() => calculate("**")}>**</button>
                        <button onClick={doClear}>Clear</button>
                    </div>
                </div>

                <h3 id="output" style={{ color: outputColor }}>{output}</h3>

            </div>
        </StyledCalculator>
    );
}