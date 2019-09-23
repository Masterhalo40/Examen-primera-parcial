var btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", amigos);

var cambio = document.querySelector("#cambio");

function amigos() {
    var numeroUno = Number(document.querySelector("#numeroUno").value);
    var numeroDos = Number(document.querySelector("#numeroDos").value);

    cambio.textContent = numerosAmigos(numeroUno, numeroDos);
}

function numerosAmigos(numeroUno, numeroDos) {
     if (sumaUno(numeroUno) == numeroDos && sumaDos(numeroDos) == numeroUno){
         return sumaUno(numeroUno);
     }
     else{
         return sumaDos(numeroDos);
     }
}

function sumaUno(numeroUno) {
    var sumaUno = 0;
    for(let i = 1; i<numeroUno; i++) {
    if(numeroUno%i==0) {
        sumaUno+=1;
    }
}
return(sumaUno);
}

function sumaDos(numeroDos) {
    var sumaDos = 0;
    for(let i = 1; i<numeroDos; i++) {
    if(numeroDos%i==0) {
        sumaDos+=1;
    }
}
return(sumaDos);
}



//function nuevoAmigo(numero2) {
//      if(numero2%i==0) {
//            nuevoAmigo+=1;
//       }
//    }
//    console.log(nuevoAmigo);
//}


//220 y 284