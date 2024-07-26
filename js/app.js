const porcento = document.getElementById('porcento')
const de = document.getElementById('de')
const resposta = document.getElementById('resposta')


function calcular(){
  const calculo = porcento.value / 100 * de.value;
  resposta.innerHTML= `Resposta : ${calculo}`;
  porcento.value ='';
  de.value ='';
}