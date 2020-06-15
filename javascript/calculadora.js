function validar()
	{
	if (document.getElementById("peso").value=="" || document.getElementById("peso").value== null)
	{document.getElementById("peso").focus();
	document.getElementById('aviso1').innerHTML = "Por favor introduza o valor do seu peso";
	$(this).css({"border-color" : "#F00", "padding": "2px"});
	return false;
	}
	if(!document.getElementById("peso").value.match(/^\d+/))
	{document.getElementById("peso").focus();
	document.getElementById('aviso1').innerHTML = "O peso deve ser um valor númerico";
	return false;}
	document.getElementById('aviso1').innerHTML ="";

	if (document.getElementById("alt").value=="" || document.getElementById("alt").value== null)
	{document.getElementById("alt").focus();
	document.getElementById('aviso2').innerHTML = "Introduza o valor da altura (metros)";
	return false;
	}
	if(!document.getElementById("alt").value.match(/^\d+/))
	{document.getElementById("alt").focus();
	document.getElementById('aviso2').innerHTML = "A altura deve ser um valor númerico";
	$(this).css({"border-color" : "#F00", "padding": "2px"});
	return false;}
	document.getElementById('aviso2').innerHTML ="";
	if (document.getElementById("altcm").value=="" || document.getElementById("altcm").value== null)
	{document.getElementById("altcm").focus();
	document.getElementById('aviso2').innerHTML = "Introduza o valor da altura (centímetros)";
	return false;
	}
	if(!document.getElementById("altcm").value.match(/^\d+/))
	{document.getElementById("altcm").focus();
	document.getElementById('aviso2').innerHTML = "A altura deve ser um valor númerico";
	return false;}
	document.getElementById('aviso2').innerHTML ="";

	calcularIMC();


	return true;}

	function  calcularIMC() {

		var p = document.getElementById("peso").value;
		var alturatotal= document.getElementById("alt").value + document.getElementById("altcm").value;
	var alt2 = alturatotal / 100;
	var IMC = p  / (alt2 * alt2);
	var IMCF = custRound(IMC,1);
	var comentario;
	var cor;
	
	var ideal1 = 18.5 * (alt2 * alt2);
	var idealt1 = custRound(ideal1,1);
	var ideal2 = 24.9 * (alt2 * alt2);
	var idealt2 = custRound(ideal2,1);

	if (IMCF < 18.5) 
	{comentario = "Peso Baixo";
	cor="#DF7401"
	}
	if (IMCF >=18.5 && IMCF <=24.9) 
	{comentario = "Peso Ideal";
	cor="green";}
	if (IMCF >=25 && IMCF <=29.9) 
	{comentario = "Acima do Peso";
	cor="#DF7401"}
	if (IMCF >=30 && IMCF <=34.9) 
	{comentario = "Obesidade Tipo I";
	cor="#FF4000"}
	if (IMCF >=35 && IMCF <=39.9) 
	{comentario = "Obesidade Tipo II";
	cor="#FF0000"}
	if (IMCF >40) 
	{comentario = "Obesidade Extrema";
	cor="#DF0101"}
	document.getElementById('resultado').innerHTML = "O seu Indice de Massa Corporal é " + IMCF;
	document.getElementById('resultado2').innerHTML = "Você está com: " + comentario.fontcolor(cor);
	document.getElementById('ideal').innerHTML = "Peso ideal: " + idealt1 + " kg" + " &#x2194; " + idealt2 + " kg";
	
	}


	function custRound(x,places) {
	return (Math.round(x*Math.pow(10,places)))/Math.pow(10,places)
	}