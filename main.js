//q6

class mensagem{
  constructor(pri, men){
     this.priority = pri;
     this.mensage = men;
  }
}

const m1 = new mensagem(1,"Aou");
const m2 = new mensagem(4,"davi");
const m3 = new mensagem(4,"eu");
const m4 = new mensagem(2,"alguem");

let vetor = [m1, m2, m3, m4];
mensageria(vetor);


function mensageria(vetor){
  let vetorA = [vetor[0]];
  for (let x = 1; x < vetor.length; x++) {
    let cont = 0;
  
    // Garantir que cont esteja dentro dos limites do array
    while (cont < vetorA.length && vetor[x].priority > vetorA[cont].priority) {
      cont++;
    }
  
    // Verificar se atingiu o final do vetorA
    if (cont == vetorA.length) {
      vetorA.push(vetor[x]);
    } else {
      let aux = vetorA[cont];
      vetorA[cont] = vetor[x];
  
      for (let y = cont + 1; y < vetorA.length; y++) {
        let prox = vetorA[y];
        vetorA[y] = aux;
        aux = prox;
      }
  
      vetorA.push(aux); // Adicionar o último valor deslocado ao final do vetorA
    }
  }
  
  console.log(vetorA);
}

