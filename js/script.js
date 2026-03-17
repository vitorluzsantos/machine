function converter() {
	var decimal = Number(demo1.value);

	demo2.innerHTML = decimal.toString(8);
	demo3.innerHTML = decimal.toString(16);
	demo4.innerHTML = decimal.toString(2);
}

function calcular(){
	let valor1 = idValor1.value;
	let valor2 = idValor2.value;

	let base1 = baseValor1.value;
	let base2 = baseValor2.value;

	let oper = operacao.value;
	let baseRes = baseResultado.value;

	// converter para decimal
	let num1;
	let num2;

	if(base1 == "decimal") num1 = parseInt(valor1,10);
	if(base1 == "hexadecimal") num1 = parseInt(valor1,16);
	if(base1 == "binario") num1 = parseInt(valor1,2);
	if(base1 == "octal") num1 = parseInt(valor1,8);

	if(base2 == "decimal") num2 = parseInt(valor2,10);
	if(base2 == "hexadecimal") num2 = parseInt(valor2,16);
	if(base2 == "binario") num2 = parseInt(valor2,2);
	if(base2 == "octal") num2 = parseInt(valor2,8);

	let resultado;

	// operações
	if(oper == "soma") resultado = num1 + num2;
	if(oper == "subtracao") resultado = num1 - num2;
	if(oper == "multiplicacao") resultado = num1 * num2;
	if(oper == "divisao") resultado = num1 / num2;

	let resultadoFinal;

	// converter resultado
	if(baseRes == "decimal") resultadoFinal = resultado;
	if(baseRes == "hexadecimal") resultadoFinal = resultado.toString(16);
	if(baseRes == "binario") resultadoFinal = resultado.toString(2);
	if(baseRes == "octal") resultadoFinal = resultado.toString(8);

	document.querySelector(".content3").innerHTML = 
		"Resultado: <p class='response'>" + resultadoFinal + "</p>";
}
