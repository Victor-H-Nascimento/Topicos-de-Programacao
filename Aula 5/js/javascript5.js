

function confirmaLimpar() 
{
    var opcao = confirm("Deseja mesmo apagar os dados?");
    if (opcao == true)
        {
            document.form1.reset();
        }

}

function confirmaEnviar() 
{
    var opcao = confirm("Deseja mesmo enviar os dados?");
    if (opcao == true)
        {
        
        
        var nome = document.form1.nome.value;
		
			if (nome == null || nome == '' || nome.length < 3) 
			{
				alert('Nome deve conter pelo menos 3 caracteres');
				document.form1.nome.value = null;
				return false;
			}

				document.form1.nome.value = nome.toUpperCase();
			

        var estadoCivil = document.form1.estadoCivil.value;

            if(estadoCivil == "invalido")
            {
				document.getElementById("fraseSelecaoEstado").innerHTML = "Selecione um estado civil valido!";
				 return false;
            }
						
				 document.getElementById("fraseSelecaoEstado").innerHTML = "";
			
			
			
		var conteudoObj = document.form1.objetivo.value;
		
		document.form1.objetivo.value = conteudoObj.toLowerCase();
		
			
			
			if(document.form1.tel.value == "" && document.form1.email.value == "")
			{
				alert("Favor inserir telefone ou email");
				return false;
			}
			
		var nivelIngles = document.form1.fluenciaIngles.value;
		
		if(nivelIngles === "invalido")
		{

        alert("Favor selecionar o nível de Inglês");
        return false;

		}
		
		var nivelEspanhol = document.form1.fluenciaEspanhol.value;
		
		if(nivelEspanhol === "invalido")
		{
			
        alert("Favor selecionar o nível de Espanhol");
        return false;

		}
    	
			
		var linguagem_escolhida = document.getElementsByName("conhecimento");	
		var contador = 0;
		
		
		for(var i = 0;i < linguagem_escolhida.length;i++ )	
		{	
			
			if(linguagem_escolhida[i].checked)
			{
				contador++;
			}	
				
        }

			if(contador === 0)
			{
				var semLinguagem = confirm("Tem certeza que deseja enviar o formulário sem nenhuma linguagem de programação escolhida?");

				if(semLinguagem == false)
				{
					return false;
				}
								
			}	
			
			
		alert('Formulário enviado');	
		document.form1.submit();	
		
		}
		
}


