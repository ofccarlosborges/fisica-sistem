function pegarValores(){

    var dados; //valores do textarea
    var valores = []; //valores sem quebra de linha
    dados = document.querySelector("#dados").value.split("\n");
    var soma = 0;
    var sum = 0;

    //var qtsElementos = dados.length;

    var a = [];
    var c = 0;
    for (var i = 0; i < dados.length; i++){
       if (dados[i].length > 0) {

        valores[i] = parseFloat(dados[i]);

        soma += parseFloat(dados[i]);
        
       }
   }


   let media = dados.reduce((total, valor) => total+valor/dados.length, 0);
   let variancia = dados.reduce((total, valor) => total + Math.pow(valor - media, 2)/dados.length, 0);
   let desvioPadrao = Math.sqrt(variancia);
   //let soma = dados.reduce((total, valor) => total+valor, 0);




   //console.log(c.toFixed(2));
   document.getElementById("soma").innerHTML = soma.toFixed(2);
   document.getElementById("media").innerHTML = media.toFixed(10);
   document.getElementById("desvioPadrao").innerHTML = desvioPadrao.toFixed(10);
   document.getElementById("variancia").innerHTML = variancia.toFixed(10);

   //SOMA

   //var desvioPadrao = Math.sqrt(sum/qtsElementos);

   console.log("Media:", media, "\n Variancia: ", variancia, "\n Desvio: ", desvioPadrao, "\n Soma: ", soma);
    
}