document.addEventListener("DOMContentLoaded", function() {
  localStorage.setItem('id_professor', '');
});

function salvar () {
    const nome = document.getElementById("nome").value;

    if (nome.trim() === '' || nome.length < 2) {
      alert("Nome Inválido! Deve ter pelo menos 2 caracteres e conter apenas letras.");
      document.getElementById('nome').value = '';
      document.getElementById('nome').focus();
      return false;
  }

  const regex = /^[A-Za-zÀ-ÿ\s]+$/;
  if (!regex.test(nome)) {
      alert("Nome Inválido! Deve conter apenas letras.");
      document.getElementById('nome').value = '';
      document.getElementById('nome').focus();
      return false;
  }
  

  alert("Nome Válido!");
  return true;
}


// Função para validar o CPF
function validarCPF(cpf) {
  // Verifica se o CPF está preenchido e é uma string numérica
  if (cpf.trim() === '' || isNaN(cpf) || cpf.length !== 11) {
      alert("CPF Inválido!");
      document.getElementById('cpf').value = '';
      document.getElementById('cpf').focus();
      return false;
  }

  alert("CPF Válido!");
  return true;

}



      // Verifica se o nome não está vazio e tem pelo menos 2 caracteres
    /*  if (nome.trim() === '' || nome.length < 2) {
        return false
      }

      const regex = /^[A-Za-zÀ-ÿ\s]+$/;
      return regex.test(nome); }
    
      if (nome.length ===0) {
        alert("Nome Válido!");
    } else {
        alert("Nome Inválido! Deve ter pelo menos 2 caracteres e conter apenas letras.");
    }



    const cpf = Number(document.getElementById("cpf").value);

            if (cpf) {
                alert("CPF Válido!")
                return false;
            } else {
                alert("CPF Inválido!");
                document.getElementById('cpf').value = '';
                document.getElementById('cpf').focus ();
            }*/


    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
  
    fetch("http://127.0.0.1:8080/professor/insert" ,{
  
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ 
        nome: nome,
        cpf: cpf
       }),
  
      headers: headers
  
      //Aqui inicia função then
     //Aqui inicia função then
  }).then(response => {
    if(response.ok) {
      return response.json(); //transforma a resposta em JSON
    } else {
      //Esta linha imprime a mensagem no console
      console.log('Aconteceu algo que não foi possivel salvar');
      //Esta linha imprime a mensagem de erro
      throw new Error('Erro ao tentar salvar');
    }

  })
  .then(data => {
    //aqui você pode acessar o 'id' retornado do back end
    const id_professor = data.id;
    console.log('ID do registro salvo:', id_professor);

    //se quiser armazenar o ID no localStorage
    localStorage.setItem('id_professor', id_professor);

      console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      //window.location.href = 'sucesso.html'    

  })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error('Erro!:', error));


  function consultar () {
    const nome = document.getElementById('nome').value;

  console.log(nome)
 
  // Cabeçalho não visivel para o usuario
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch(`http://127.0.0.1:8080/professor/consultarPorNome?nome=${nome}` ,{

    method: "GET",


    //mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    //cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    //body: JSON.stringify({ nome: nome}),

    headers: {
      'Content-Type' : 'application/json'
    }

    //Aqui inicia função then
  })
  .then(response => {

    if (!response.ok) {
      throw new Error('Erro ao buscar professores')
    } 
    return response.json();
  })
  .then(id_professor => {
    console.log("ID da conta recebida:", id_professor); // Aqui o id é diretamente o retorno

      localStorage.setItem('id_professor', JSON.stringify(id_professor));

      console.log('Id dos professores foram salvos no localStorage')
      
   
  })
  .catch(error => {
    console.error("Erro capturado no catch:", error);
  });
}

  function alterar() {  
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
 
    const id_professor = localStorage.getItem('id_professor');
    console.log(id_professor);

    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
  
    console.log(`http://127.0.0.1:8080/professor/${id_professor}`);

    fetch(`http://127.0.0.1:8080/professor/${id_professor}` ,{
      
      

      method: "PUT",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ 
        nome: nome,
        cpf: cpf      
      }),
  
      headers: headers
  
      //Aqui inicia função then
    }).then(response => {
  
      if(response.ok) {
  
        //Esta linha imprime a mensagem no concole
        console.log("Foi no servidor e voltou");
  
        //Esta linha carrega a página sucesso
        window.location.href = "sucesso3.html"    
      } else {
        //Esta linha imprime a mensagem no console
        console.log("Aconteceu algo que não foi possivel salvar");
  
        //Esta linha imprime a mensagem de erro
        throw new Error("Erro ao tentar salvar");
      }
  
    })
    //Aqui será executado caso a then não seja chamado
    .catch(error => console.error("Erro!:", error));
}

  function apagar () {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;

    const id_professor = localStorage.getItem('id_professor');
    console.log(id_professor);
 

    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    console.log(`http://127.0.0.1:8080/professor/${id_professor}`);

    fetch(`http://127.0.0.1:8080/professor/${id_professor}` ,{

    method: "DELETE",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    // body: JSON.stringify({ 
    //   nome: nome,
    //   cpf: cpf
    //  }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if(response.ok) {

      //Esta linha imprime a mensagem no concole
      console.log("Foi no servidor e voltou");

      //Esta linha carrega a página sucesso
      window.location.href = "sucesso4.html"    
    } else {
      //Esta linha imprime a mensagem no console
      console.log("Aconteceu algo que não foi possivel salvar");

      //Esta linha imprime a mensagem de erro
      throw new Error("Erro ao tentar salvar");
    }

  })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error("Erro!:", error));
}





function isUpperCase(s) {
  return /^[A-Z]+$/.test(s.normalize('NFD').replace(/[^A-Za-z]/g, ''));
}

[ 
/* Caracteres em formato Maiúsculos*/
].forEach(s => {
  console.log(`${s} = ${isUpperCase(s)}`);
});
