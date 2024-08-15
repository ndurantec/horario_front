var meuFormulario = document.getElementById("agenda_professor");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  cadastrar_turma();
});

function capturarAulasporDia() {
  const aula_dia = Number(document.getElementById("Aulas por Dia").value);
  return aula_dia;
}

function capturarHorários() {
 const horario = Number(document.getElementById("Horário").value); 
 return horario;
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