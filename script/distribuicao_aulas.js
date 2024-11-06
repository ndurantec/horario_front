document.addEventListener("DOMContentLoaded", function() {
    carregarComboProfessor();
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