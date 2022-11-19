var btnCalcularMRU = document.getElementById("btnCalcularMRU");
var labelValor1 = document.getElementById("labelValor1");
var labelValor2 = document.getElementById("labelValor2");
var labelValor3 = document.getElementById("labelValor3");

var mruValor1 = document.getElementById("mruValor1");
var mruValor2 = document.getElementById("mruValor2");
var mruValor3 = document.getElementById("mruValor3");

function escolhaMRU(){
    let spinnerMRU = document.getElementById("escolha_mru").value;
    
    if(spinnerMRU == "velo"){


        labelValor1.innerHTML = "Posição incial (m)"
        labelValor2.innerHTML = "Posicao final (m)"
        labelValor3.innerHTML = "Tempo (s)"

        btnCalcularMRU.addEventListener("click", calcularVelocidade); 
        //btnCalcularMRU.onclick = calcularVelocidade();
        
        mruValor1.disabled = false;
        mruValor2.disabled = false;
        mruValor3.disabled = false;
        
        } else if(spinnerMRU == "posiInicial"){
            
        labelValor1.innerHTML = "Posição Final (m)"
        labelValor2.innerHTML = "Tempo (s)"
        labelValor3.innerHTML = "Velocidade (m/s)"

        btnCalcularMRU.addEventListener("click", calcularPosiInicial);

        mruValor1.disabled = false;
        mruValor2.disabled = false;
        mruValor3.disabled = false;

        } else if(spinnerMRU == "posiFinal"){
            
            labelValor1.innerHTML = "Posição Incial (m)"
            labelValor2.innerHTML = "Tempo (s)"
            labelValor3.innerHTML = "Velocidade (m/s)"

            btnCalcularMRU.addEventListener("click", calcularPosiFinal);

            mruValor1.disabled = false;
            mruValor2.disabled = false;
            mruValor3.disabled = false;

        } else if(spinnerMRU == "tempo"){
            
            labelValor1.innerHTML = "Posição incial (m)"
            labelValor2.innerHTML = "Posicao final (m)"
            labelValor3.innerHTML = "Velocidade (m/s)"

            btnCalcularMRU.addEventListener("click", calcularTempo);

            mruValor1.disabled = false;
            mruValor2.disabled = false;
            mruValor3.disabled = false;

        } else if(spinnerMRU == "selecioneOpcao"){
            labelValor1.innerHTML = ""
            labelValor2.innerHTML = ""
            labelValor3.innerHTML = ""

            mruValor1.disabled = true;
            mruValor2.disabled = true;
            mruValor3.disabled = true;
        }

    }

    //Fução para verificar se os inputs estão vazios
    function verificarCampos(){
        res = false
        if(!mruValor1.value || !mruValor2.value || !mruValor3.value){
            res = true
        }
        return res;
    }


    function calcularVelocidade(){
        if(verificarCampos()){
            alert('Campo vazio');

        } else {
            let posiInicial = mruValor1.value;
            let posiFinal = mruValor2.value;
            let tempo = mruValor3.value;
    
            document.getElementById("result_valor").innerHTML = (posiFinal - posiInicial)/tempo + " m/s";


            
        }
    }
    
    function calcularTempo(){
        
        if(verificarCampos()){
            alert('Campo vazio');

        } else {
            let posiInicial = mruValor1.value;
            let posiFinal = mruValor2.value;
            let velocidade = mruValor3.value;
    
            document.getElementById("result_valor").innerHTML = (posiFinal - posiInicial)/velocidade + " s";


            
        }
    }

    function calcularPosiInicial(){
        if(verificarCampos()){
            alert('Campo vazio');

        } else {
            let posiFinal = mruValor1.value;
            let tempo = mruValor2.value;
            let velocidade = mruValor3.value;
    
            document.getElementById("result_valor").innerHTML = (posiFinal/(velocidade * tempo)) + " m";
            
        }

    }
    
    function calcularPosiFinal(){
        if(verificarCampos()){
            alert('Campo vazio');

        } else {
            let posiInicial = parseFloat(mruValor1.value);
            let tempo = mruValor2.value;
            let velocidade = mruValor3.value;
    
            document.getElementById("result_valor").innerHTML = (posiInicial + (velocidade * tempo)) + " m";


            
        }
        
    }