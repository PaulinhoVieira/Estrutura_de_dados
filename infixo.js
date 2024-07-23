const infixo = "asd+dcv";
const stack = infixo.split('');

if(stack.includes("+")){
  console.log(posFixas(stack, "+"));
}else if(stack.includes("-")){
  console.log(posFixas(stack, "-"));
}else if(stack.includes("/")){
  console.log(posFixas(stack, "/"));
}else if(stack.includes("%")){
  console.log(posFixas(stack, "%"));
}else if(stack.includes("*")){
  console.log(posFixas(stack, "*"));
}else{
  console.log(stack.join(''));
}

function posFixas(stack, oper){
  let cont = 0;
  while(cont < stack.length-1){
    if(stack[cont] === oper){
      let temp = stack[cont];
      stack[cont] = stack[cont+1];
      stack[cont+1] = temp;
    }
    cont ++;
  }
  return stack.join('');
}

