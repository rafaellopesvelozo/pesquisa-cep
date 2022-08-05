
let info = document.getElementById("info");


//limpar formulário
function limpaForm(endereco) {
  document.getElementById("endereco").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
}

//preencher formulário
function preencherForm(endereco) {
  document.getElementById("endereco").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
  console.log(endereco);
}

function msgErro() {
  info.innerHTML = "Cep não encontrado..! ☹";
  document.getElementById("cep").style.backgroundColor = "rgb(231, 80, 80)";
}

//remover Cep não encontrado
function cepNaoEncontrado() {
  info.innerHTML = "";
  document.getElementById("cep").style.backgroundColor = "";
  document.getElementById("cep").value = "";
  document.getElementById("cep").focus();
}

//caso cep válido
const cepValido = (cep) => cep.length == 8;

const pesquisaCep = async (e) => {
  e.preventDefault();
  let cep = document.getElementById("cep").value;
  let url = `http://viacep.com.br/ws/${cep}/json/`;

  //validar cep

  if (cepValido(cep)) {
    limpaForm(); //limpa os campos antes de pesquisar

    let dados = await fetch(url);
    let endereco = await dados.json();

    //caso erro
    if (endereco.hasOwnProperty("erro")) {
      console.log(endereco);
      msgErro();
      setTimeout(cepNaoEncontrado, 2000);
    } else {
      //caso valido
      preencherForm(endereco);
    }
  } else {
    msgErro();
    limpaForm();
    //remover aviso cep incorreto
    setTimeout(cepNaoEncontrado, 2000);
  }

};


document.getElementById('form').addEventListener('submit',pesquisaCep)
document.getElementById("submit").addEventListener("click", pesquisaCep);
