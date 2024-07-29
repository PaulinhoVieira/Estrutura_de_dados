//q7
class Cliente{
  constructor(nome, preferencia){
    this.nome = nome;
    this.preferencia = preferencia;
  }
}

let c1 = new Cliente("davi","normal");
let c2 = new Cliente("paulo","idoso");
let c3 = new Cliente("rita","gravida");
let c4 = new Cliente("augusto","normal");

let fila = [c1, c2, c3, c4];
console.log(preferencia(fila));

function preferencia(fila){
  let prioritarios = [];
  let normais = [];

  for (let cliente of fila) {
    if (cliente.preferencia === "normal") {
      normais.push(cliente);
    } else {
      prioritarios.push(cliente);
    }
  }
  fila = [...prioritarios, ...normais]; 
  return fila;
}