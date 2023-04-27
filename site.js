alert("Ola,eu sou um alerta")
function somar(){
    let valorR=document.getElementById("valor");
    let valor=parseInt(valorR.value);
    let valorR2=document.getElementById("valor2");
    let valor2=parseInt(valorR2.value);
    let soma= valor2+  valor;
    let somaConvertida="O valor é "+soma;
    let valorConv= "O valor é "+ soma;
    somaConvertida.innerhtml=soma;
    console.log(valorConv)    
    document.getElementById("valor-soma").innerHTML = valorConv;

}


