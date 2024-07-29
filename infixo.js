//q9
const infixo = "asd+dcv";
const queue = infixo.split('');

if(queue.includes("+")){
  console.log(posFixas(queue, "+"));
}else if(queue.includes("-")){
  console.log(posFixas(queue, "-"));
}else if(queue.includes("/")){
  console.log(posFixas(queue, "/"));
}else if(queue.includes("%")){
  console.log(posFixas(queue, "%"));
}else if(queue.includes("*")){
  console.log(posFixas(queue, "*"));
}else{
  console.log(queue.join(''));
}

function posFixas(queue, oper){
  let cont = 0;
  while(cont < queue.length-1){
    if(queue[cont] === oper){
      let temp = queue[cont];
      queue[cont] = queue[cont+1];
      queue[cont+1] = temp;
    }
    cont ++;
  }
  return queue.join('');
}

