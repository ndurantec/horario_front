var meuFormulario = document.getElementById("cadastro_disciplina");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  cadastrar_turma();
});

function capturarNome() {
  const primeiro_numero_inteiro = Number(document.getElementById("nome").value);
  return primeiro_numero_inteiro;
}

function capturarCargaHoraria() {
 const segundo_numero_inteiro = Number(document.getElementById("carga_horaria").value); 
 return segundo_numero_inteiro;
}


function somar() {
  let primeiro_numero_inteiro = capturarPrimeiroNumeroInteiro();
  let segundo_numero_inteiro = capturarSegundoNumeroInteiro();
  let resultado_soma = primeiro_numero_inteiro + segundo_numero_inteiro;
  imprimirResultadoNaTela(resultado_soma);
}


function imprimirResultadoNaTela(resultado_soma) {
  document.getElementById("resultado_soma").value = resultado_soma;
}