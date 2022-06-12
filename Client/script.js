const operand1Input = document.getElementById('op1');
const operand2Input = document.getElementById('op2');
const resultOutput = document.getElementById('res');

async function handleCalculateAsync()
{
  const operand1 = operand1Input.value;
  const operand2 = operand2Input.value;

  const options = {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ operand1, operand2 })
  };

  const result = await fetch("http://127.0.0.1:8080/calc", options);
  const obj = await result.json();
  resultOutput.value = obj.result;
}