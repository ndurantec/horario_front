document.addEventListener("DOMContentLoaded", function() {
    carregarComboProfessor();
    capturarIdDoProfessor();
  });

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


  function capturarIdDoProfessor() {
    const selectElement = document.getElementById('professor');
    
    // Adiciona o evento change
    selectElement.addEventListener('change', function() {
      // Captura o valor selecionado
      const valorSelecionado = selectElement.value;
      
      // Exibe o valor selecionado
      document.getElementById('resultado').innerText = `Você selecionou: ${valorSelecionado}`;

      consultarDisciplinaDoProfessor(valorSelecionado);

    });

  }

  function consultarDisciplinaDoProfessor(valorSelecionado) {                                            
     
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    
    fetch(`http://127.0.0.1:8080/professor/${valorSelecionado}` ,{
  
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