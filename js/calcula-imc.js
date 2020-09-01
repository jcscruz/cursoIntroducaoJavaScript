/*Seletores

Seletor de classe .
	document.querySelector(".algumaClasse")
	
Seletor de vários elementos para a mesma classe
	document.querySelectorAll(".algumaClasse")
	
Selector de id #
	document.querySelector("#algumId")
	
Sekecuibar tags html
	document.querySelector("h1")
*/

var titulo = document.querySelector("h1")
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i < pacientes.length; i++)
{	

	var paciente = pacientes[i]

	//Calcular IMC	
	var objPaciente = paciente.querySelector(".info-nome")
	var nomePaciente= objPaciente.textContent

	var tdPeso = paciente.querySelector(".info-peso")
	var peso = tdPeso.textContent
	var tdAltura = paciente.querySelector(".info-altura")
	var altura = tdAltura.textContent
	var tdImc = paciente.querySelector(".info-imc")

	var resultado 
	
	var pesoEhValido = validaPeso(peso)
	var alturaEhValida = validaAltura(altura)
	

	if(!alturaEhValida){
		resultado = "Altura inválida"		
		paciente.classList.add("paciente-invalido")
		tdImc.textContent = resultado
	}
	
	if(!pesoEhValido){
		resultado = "Peso inválido"		
		paciente.classList.add("paciente-invalido")
		tdImc.textContent = resultado
	}
	
	if(pesoEhValido && alturaEhValida){
		var imc = calculaImc(peso, altura)
		resultado = imc
		tdImc.textContent = resultado	
	}	

}


function calculaImc(peso, altura){
	var imc = 0
	imc = peso / (altura * altura)
	return imc.toFixed(2)
}

function validaPeso(peso){
	if(peso > 0 && peso < 500){
		return true
	}else{
		return false		
	}
}

function validaAltura(altura){
	if(altura > 0 && altura < 3.00){
		return true
	}else{
		return false		
	}
}