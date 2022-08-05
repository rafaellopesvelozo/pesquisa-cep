let formulario = document.querySelector("form");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  
  const pesquisaCep =  () => {
    let cep = document.getElementById("cep").value;
    let url = `http://viacep.com.br/ws/${cep}/json/`;
    let info = document.getElementById("info");
    endereco = document.getElementById("endereco").value 

    fetch (url)
    //depois 
    .then((response)=>{
        response.json();
        console.log(response)
        
        //depois
        .then(function(data){
            //inserir dados
            endereco = data.logradouro;

        })
    })
  
  };


  document.getElementById("cep").addEventListener("mouseout", pesquisaCep);

})
