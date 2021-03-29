// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkNumbers = (num1, num2) => {
  if (num1 === num2){
    return `Parabéns você ganhou`;
  } else {
    return `Tente novamente`;
  }
};

const generateRandNumber = (numChoiced, funct) => {
  const numDrawn = Math.floor(Math.random() * 5) + 1;
  return funct(numChoiced, numDrawn);

};

console.log(generateRandNumber(4, checkNumbers));
