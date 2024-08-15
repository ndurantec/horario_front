var meuFormulario = document.getElementById("cadastro_livro");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  cadastrar_livro();
});

function nome_prof() {
  const nome_prof = Number(document.getElementById("nome_prof").value);
  return nome_prof;
}

function cpf() {
 const segundo_numero_inteiro = Number(document.getElementById("CPF").value); 
 return cpf;
}


function somar() {
  let primeiro_numero_inteiro = capturarPrimeiroNumeroInteiro();
  let segundo_numero_inteiro = capturarSegundoNumeroInteiro();
  let resultado_soma = primeiro_numero_inteiro + segundo_numero_inteiro;
  imprimirResultadoNaTela(genero_textual);
}


function imprimirResultadoNaTela(resultado_soma) {
  document.getElementById("genero_textual").value = resultado_soma;
}