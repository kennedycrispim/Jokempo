//definindo as variaveis
var resultado = ""
var escolha = "";
var random = "";
var score = 0;
var machine_score = 0;
let lista = ["pedra","papel","tesoura"];

//conexao aos botoes
var btn_tesoura = document.getElementById("btn-tesoura");
var btn_papel = document.getElementById("btn-papel");
var btn_pedra = document.getElementById("btn-pedra");
var btn_reiniciar = document.getElementById("btn-reiniciar");

var img_escolha = document.getElementById("img-escolha");
var img_aleatorio = document.getElementById("img-aleatorio");

/*var txt_escolha = document.getElementById("voce");
var txt_aleatorio = document.getElementById("adversario");*/
var txt_resultado = document.getElementById("resultado");
var txt_score = document.getElementById("score");
var txt_machine_score = document.getElementById("machine-score");

//funçao usada para aguardar segundos
function esperar(tempo){
  return new Promise (erro => setTimeout(erro, tempo));
}


async function mostarResultado(random, escolha, resultado){ 

  txt_resultado.innerText = resultado;
  teste = `img/${escolha}.png`
  
  if(escolha == "papel" || escolha == "tesoura"){ 
    img_escolha.src = teste;
  }else{
    img_escolha.src = `img/pedra.png`
  }

  
  txt_resultado.innerText = "Atenção..."

  /*if(resultado == "Voce ganhou :)"){
    txt_resultado.classList.add("txt-ganhador");
  }else if(resultado == "Voce perdeu :("){
    txt_resultado.classList.add("txt-perdedor");
  }else{
    txt_resultado.classList.remove("txt-ganhador");
    txt_resultado.classList.remove("txt-perdedor");
  }*/

  await esperar(1000);
  img_aleatorio.src = `img/${random}.png`
  await esperar(500);
  txt_resultado.innerText = resultado;
}  

async function mostrarscore(){
  await esperar(1500);
  txt_score.innerHTML = score;
  txt_machine_score.innerHTML = machine_score;
} 


function iniciar(){  
  randomindex = Math.floor(Math.random() * lista.length);
  random = lista[randomindex]; 

  if(escolha == "tesoura"){
      if(random == "tesoura"){
        mostarResultado(random, escolha, "Empatou :|");
      }else if(random == "papel"){
        mostarResultado(random, escolha,"Voce ganhou :)");
        score++;
        mostrarscore();
      }else{
        mostarResultado(random, escolha,"Voce perdeu :(");
        machine_score++;
        mostrarscore();
      }
  }else if(escolha == "papel"){
    if(random == "papel"){
      mostarResultado(random, escolha,"Empatou :|");
    }else if(random == "tesoura"){
      mostarResultado(random, escolha,"Voce perdeu :(");
      machine_score++;
      mostrarscore();
    }else{
      mostarResultado(random, escolha,"Voce ganhou :)");
      score++;
      mostrarscore();
    }
  }else{
    if(random == "tesoura"){
      mostarResultado(random, escolha,"Voce ganhou :)");
      score++;
      mostrarscore();
    }else if(random == "papel"){
      mostarResultado(random, escolha,"Voce perdeu :("); 
      machine_score++;
      mostrarscore();
    }else{
      mostarResultado(random, escolha,"Empatou :|");
    }
  }
}

//selecionando a opçao
btn_tesoura.addEventListener('click', () => {
  escolha = "tesoura";
  img_escolha.src =  `img/interrogacao.png`;
  img_aleatorio.src =  `img/interrogacao.png`;
  iniciar();
})

btn_papel.addEventListener('click', () => {
  escolha = "papel";
  /*txt_escolha.innerText = "?";
  txt_aleatorio.innerText = "?";*/
  img_escolha.src =  `img/interrogacao.png`;
  img_aleatorio.src =  `img/interrogacao.png`;
  iniciar();
})

btn_pedra.addEventListener('click', () => {
  escolha = "pedra";
  img_escolha.src =  `img/interrogacao.png`;
  img_aleatorio.src =  `img/interrogacao.png`;
  iniciar();
})

btn_reiniciar.addEventListener('click', () => {
  score = 0;
  machine_score = 0;
  txt_resultado.innerText = "";
  mostrarscore();
  img_escolha.src =  `img/interrogacao.png`;
  img_aleatorio.src =  `img/interrogacao.png`;
})