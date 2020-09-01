var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault()
	
	console.log("funcionou o botão")	

	var formPaciente = document.querySelector("#form-adiciona")

	var paciente = obterPacienteDoFormulario(formPaciente)
	
	adicionaPacienteNaTabela(paciente)
	
	/*
	var pacienteTr = montaTr(paciente)
	
	var errosDeValidacao = validaPaciente(paciente)
	
	if(errosDeValidacao.length > 0){		
		exibeMensagensDeErro(errosDeValidacao)
		return
   	}
	
    var tabelaPaciente = document.querySelector("#tabela-pacientes")
	
	tabelaPaciente.appendChild(pacienteTr)
	*/
	
	formPaciente.reset()
	
	var mensagensErro = document.querySelector("#mensagens-erro")
	mensagensErro.innerHTML = ""

})


function obterPacienteDoFormulario(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente
}


function montaTd(dado, classe){
	var td = document.createElement("td")
	td.classList.add(classe)
	td.textContent = dado
	return td
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr")
	pacienteTr.classList.add("paciente")
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))								   
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))								   
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))								   
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))		
								   
	return pacienteTr;								   
}

function validaPaciente(paciente){
	var erros = []
	
	if(paciente.nome.length == 0){
		erros.push("O nome do paciente não pode ser em branco")
	}
		
	if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;		
}


function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro")
	ul.innerHTML = "";
	
	erros.forEach(function(erro){
		var li = document.createElement("li")
		li.textContent = erro
		ul.appendChild(li)
	})
}

function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente)
	var tabela = document.querySelector("#tabela-pacientes")
	tabela.appendChild(pacienteTr)
}