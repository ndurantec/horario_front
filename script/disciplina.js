document.addEventListener("DOMContentLoaded", function() {
  localStorage.setItem('id_disciplina', '');
  carregarComboProfessor();
});

function salvar() {
  const nome = document.getElementById("nome_disciplina").value;                                                  
  const cargaHoraria = Number(document.getElementById("carga_horaria").value);
  const professor = Number(document.getElementById("professor").value);

    if (nome.length >50){
    alert("O nome deve ter no máximo 50 caracteres");
    document.getElementById("nome").value;
    return false;
  }







  console.log(nome);
  console.log(cargaHoraria);
  console.log(professor);


  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

  fetch("http://127.0.0.1:8080/disciplina/insert" ,{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({
       nome: nome,
       cargaHoraria: cargaHoraria,
       professor: {id: professor}
       }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if(response.ok) {

      return response.json(); //transforma a resposta em JSON
      //console.log("Foi no servidor e voltou");

      //Esta linha carrega a página sucesso
      //window.location.href = "sucesso.html"    
    } else {
     //Esta linha imprime a mensagem no console
      console.log('Aconteceu algo que não foi possivel salvar');
      //Esta linha imprime a mensagem de erro
      throw new Error('Erro ao tentar salvar');
    }

  })
  .then(data => {
    //aqui você pode acessar o 'id' retornado do back end
    const id_disciplina = data.id;
    console.log('ID do registro salvo:', id_disciplina);

    //se quiser armazenar o ID no localStorage
    localStorage.setItem('id_disciplina', id_disciplina);

      console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      //window.location.href = 'sucesso.html'    

  })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error("Erro!:", error));
}


function consultar() {
  const nome = document.getElementById("nome_disciplina").value;                                                  

  
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

 

  fetch(`http://127.0.0.1:8080/disciplina/consultarPorNome?nome=${nome}` ,{

    method: "GET",


    //mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    //cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    //body: JSON.stringify({ 
        //nome: nome,
        //professor: {id: professor}
    // }),

    headers: {
      'Content-Type' : 'application/json'
    }
    //Aqui inicia função then
  }).then(response => {

    if (!response.ok) {
      throw new Error('Erro ao buscar professores')
    } 
    return response.json();
  })
  .then(id_disciplina => {
    console.log("ID da conta recebida:", id_disciplina); // Aqui o id é diretamente o retorno

      localStorage.setItem('id_professor', JSON.stringify(id_disciplina));

      console.log('Id dos professores foram salvos no localStorage')
      
   
  })
  .catch(error => {
    console.error("Erro capturado no catch:", error);
  });
}


function alterar() {
  const nome = document.getElementById("nome_disciplina").value;                                                  
  const cargaHoraria = Number(document.getElementById("carga_horaria").value);
  const professor = Number(document.getElementById("professor").value);
 
  const id_disciplina = localStorage.getItem('id_disciplina');

  
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

  console.log(`http://127.0.0.1:8080/disciplina/${id_disciplina}`);

  fetch(`http://127.0.0.1:8080/disciplina/${id_disciplina}` ,{

    method: "PUT",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ 
        nome: nome,
        cargaHoraria: cargaHoraria,
        professo: {id: professor} 
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

function apagar() {
  const nome = document.getElementById("nome_disciplina").value;                                                  
  const cargaHoraria = Number(document.getElementById("carga_horaria").value);
  const professor = Number(document.getElementById("professor").value);
 
  const id_disciplina = localStorage.getItem('id_disciplina');

  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

  
  console.log(`http://127.0.0.1:8080/disciplina/${id_disciplina}`);

  fetch(`http://127.0.0.1:8080/disciplina/${id_disciplina}` ,{

    method: "DELETE",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
   // body: JSON.stringify({
     //   nome: nome,
      //  cargaHoraria: cargaHoraria,
      //  professor: {id: professor} 
     // }),

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

function carregarComboProfessor() {
 
  //console.log('Carregou a página e chamou a função');

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/professor/findAll' ,{

    method: "GET",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela

    headers: headers

    
  }).then(response => response.json())
  .then(data => {
      const comboBox = document.getElementById('professor');
      data.forEach(professor => {
          const option = document.createElement('option');
          option.value = professor.id;
          option.textContent = professor.nome;
          comboBox.appendChild(option);
      });
  })
  .catch(error => console.error('Erro ao carregar locais:', error));
   

}