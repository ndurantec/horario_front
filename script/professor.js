document.addEventListener("DOMContentLoaded", function() {
  localStorage.setItem('id_professor', '');
});

function salvar () {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;

    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
  
    fetch("http://127.0.0.1:8080/professor/insert",{
  
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
}

  function consultar () {
    const nome_conta = document.getElementById('nome_conta').value;

  console.log(nome_conta)
 
  // Cabeçalho não visivel para o usuario
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch( 'http://127.0.0.1:8080/conta/findByNome' ,{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: nome_conta}),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if (response.ok) {
      return response.text(); // Usamos text() para lidar com retorno direto (não é JSON)
    } else {
      console.error('Erro na resposta da API');
      throw new Error('Erro ao tentar buscar a conta');
    }
  })
  .then(id_conta => {
    console.log("ID da conta recebida:", id_conta); // Aqui o id é diretamente o retorno

    if (id_conta) {
      localStorage.setItem('id_conta', id_conta);
      alert("item achado com sucesso! agora é possivel alterar ou deletar a conta selecionada ");
    } else {
      console.error("ID não encontrado na resposta");
    }
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