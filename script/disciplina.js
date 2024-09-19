function salvar() {
  const nome_disciplina = document.getElementById("nome_disciplina").value;                                                  
  const carga_horaria = Number(document.getElementById("carga_horaria").value);
  const nome_professor = Number(document.getElementById("nome_professor").value);

  console.log(nome_disciplina);
  console.log(carga_horaria);
  console.log(nome_professor);


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
       nome: nome_disciplina,
       cargaHoraria: carga_horaria,
       professor: nome_professor
       }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if(response.ok) {

      //Esta linha imprime a mensagem no concole
      console.log("Foi no servidor e voltou");

      //Esta linha carrega a página sucesso
      window.location.href = "sucesso.html"    
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

function consultar() {
  const nome_disciplina = document.getElementById("nome_disciplina").value;
  const carga_horaria = document.getElementById("carga_horaria").value;
  const nome_professor = document.getElementById("nome_professor").value;

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

  fetch("http://127.0.0.1:8080/disciplina/findByld" ,{

    method: "GET",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ 
        nome_disciplina: nome_disciplina,
        carga_horaria: carga_horaria,
        nome_professor: nome_professor
     }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if(response.ok) {

      //Esta linha imprime a mensagem no concole
      console.log("Foi no servidor e voltou");

      //Esta linha carrega a página sucesso
      window.location.href = "sucesso.html"    
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

function alterar() {
  const nome_disciplina = document.getElementById("nome_disciplina").value;
  const carga_horaria = document.getElementById("carga_horaria").value;
  const nome_professor = document.getElementById("nome_professor").value;
 

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

  fetch("http://127.0.0.1:8080/disciplina/update" ,{

    method: "PUT",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ 
        nome_disciplina: nome_disciplina,
        carga_horaria: carga_horaria,
        nome_professor: nome_professor }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if(response.ok) {

      //Esta linha imprime a mensagem no concole
      console.log("Foi no servidor e voltou");

      //Esta linha carrega a página sucesso
      window.location.href = "sucesso.html"    
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
  const nome_disciplina = document.getElementById("nome_disciplina").value;
  const carga_horaria = document.getElementById("carga_horaria").value;
  const nome_professor = document.getElementById("nome_professor").value;
 

    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

  fetch("http://127.0.0.1:8080/disciplina/delete" ,{

    method: "DELETE",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({
        nome_disciplina: nome_disciplina,
        carga_horaria: carga_horaria,
        nome_professor: nome_professor }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if(response.ok) {

      //Esta linha imprime a mensagem no concole
      console.log("Foi no servidor e voltou");

      //Esta linha carrega a página sucesso
      window.location.href = "sucesso.html"    
    } else {
      //Esta linha imprime a mensagem no console
      console.log("Aconteceu algo que não foi possivel salvar");

      //Esta linha imprime a mensagem de erro
      throw new Error("Erro ao tentar salvar");
    }

  })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error("Erro!:", error));

  function carregarComboOperacao() {
 
    //console.log('Carregou a página e chamou a função');
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/operacao/findAll' ,{
  
      method: "GET",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
  
      headers: headers
  
     
    }).then(response => response.json())
    .then(data => {
        const comboBox = document.getElementById('Operacoes');
        data.forEach(operacao => {
            const option = document.createElement('option');
            option.value = operacao.id;
            option.textContent = operacao.nome;
            comboBox.appendChild(option);
        });
    })
    .catch(error => console.error('Erro ao carregar locais:', error));
     
  
  }
}

