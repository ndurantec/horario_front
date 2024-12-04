document.addEventListener("DOMContentLoaded", function() {
  localStorage.setItem('id_turma', '');
});

function salvar () {
  const nome = document.getElementById("nome").value;
  const sala = document.getElementById("sala").value;
  

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

  fetch("http://127.0.0.1:8080/turma/insert" ,{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ 
      nome: nome,
      sala: sala
     }),

    headers: headers

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
    const id_turma = data.id;
    console.log('ID do registro salvo:', id_turma);

    //se quiser armazenar o ID no localStorage
    localStorage.setItem('id_turma', id_turma);

      console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      window.location.href = 'sucesso.html'    

  })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error("Erro!:", error));
}


/*
function consultar () {
  const nome = document.getElementById('nome').value;

console.log(nome)

// Cabeçalho não visivel para o usuario
var headers = new Headers();    
headers.append("Content-Type", "application/json");
headers.append('Access-Control-Allow-Origin', '*');

fetch(`http://127.0.0.1:8080/turma/consultarPorNome?nome=${nome}` ,{

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
.then(id_turma => {
  console.log("ID da turma recebida:", id_turma); // Aqui o id é diretamente o retorno

    localStorage.setItem('id_turma', JSON.stringify(id_turma));

    console.log('Id dos professores foram salvos no localStorage')
    
 
})
.catch(error => {
  console.error("Erro capturado no catch:", error);
});
}
*/

function consultar() {

  const nome = document.getElementById('nome').value;

  console.log(nome)
 
  // Cabeçalho não visivel para o usuario
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch( 'http://127.0.0.1:8080/turma/findByNome' ,{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: nome}),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if (response.ok) {
      return response.text(); // Usamos text() para lidar com retorno direto (não é JSON)
    } else {
      console.error('Erro na resposta da API');
      throw new Error('Erro ao tentar buscar a turma');
    }
  })
  .then(id_turma => {
    console.log("ID da turma recebida:", id_turma); // Aqui o id é diretamente o retorno

    if (id_turma) {
      localStorage.setItem('id_turma', id_turma);
      alert("item achado com sucesso! agora é possivel alterar ou deletar a turma selecionada ");
    } else {
      console.error("ID não encontrado na resposta");
    }
  })
  .catch(error => {
    console.error("Erro capturado no catch:", error);
  });
}


function alterar () {
  const nome = document.getElementById("nome").value;
  const sala = document.getElementById("sala").value;

  const id_turma = localStorage.getItem('id_turma');
  console.log(id_turma);
  

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

  console.log(`http://127.0.0.1:8080/turma/${id_turma}`);

  fetch(`http://127.0.0.1:8080/turma/${id_turma}` ,{

    method: "PUT",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ 
      nome: nome,
      sala: sala
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
  const sala = document.getElementById("sala").value;

  const id_turma = localStorage.getItem('id_turma');
    console.log(id_turma);
  

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

  console.log(`http://127.0.0.1:8080/turma/${id_turma}`);

  fetch(`http://127.0.0.1:8080/turma/${id_turma}` ,{

    method: "DELETE",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    //  Convertendo o objeto JavaScript para JSON
    //  Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    //  body: JSON.stringify({ 
    //  nome: nome,
    //  sala: sala
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