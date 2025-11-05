let tarefas = [];

//valida o preenchimento da tarefa caso nao tenha nada
function validaCampo() {
  let valida = false;
  if (document.getElementById('task').value == '') valida = true;
  return valida;
}

//funcao que adiciona a tarefa
function adcionaTarefa() {
  let linhas = document.getElementById('task');
  if (validaCampo()) {
    alert('Preencha a tarefa!');
  } else {
    tarefas.push(linhas.value);
    console.log(tarefas);
    linhas.value = '';
    listarTarefas();
  }
  document.getElementById('task').focus();
}

//funcao que mostra a lista de tarefas

function listarTarefas() {
  let valor = '';
  for (let i = 0; i < tarefas.length; i++) {
    valor += tarefas[i] + '<br/>';
  }
  document.getElementById('lista').innerHTML = valor;
}

function removeTarefa() {
  tarefas.pop();
  listarTarefas();
}
/*  */

// CRIANDO UM ARRAY DE OBJETO COM AS IMG E INFORMAÇOES DO BANNE
const bannerItems =[
    {
        imagem:"./src/assets/cardImg6.jpeg",
        titulo:"R$108,00",
        descricao:"Fantasia Infantil Homem Formiga",
    },
    {
        imagem:"./src/assets/cardImg4.jpeg",
        titulo: "R$250,00",
        descricao:"Fantasia Hulk Infantil",
    },
    {
        imagem:"./src/assets/cardImg2.jpeg",
        titulo:"R$153,00",
        descricao:"Fantasia Adulto Mulher Aranha",
    },
    {
        imagem:"./src/assets/cardImg1.jpeg",
        titulo:"R$255,00",
        descricao:"Fantasia Adulto Thor Masculino",
    }

];
// DECLARANDO AS VARIAVEIS E ELEMENTOS COM o dom(DOCUMENT OBJECT MODEL)

const tempo= 5000;
const elementoBanner = document.querySelector (".banner");
const elementoTitulo = document.querySelector (".banner-titulo");
const elementoDescricao = document.querySelector (".banner-descricao")

let i = 0;

//  Criando a função slideShow
function slideShow(){

    // ALTERA A IMAGEM DO FUNDO DO BANNER
    elementoBanner.style.backgroundImage =`url(${bannerItems[i].imagem})`;
    elementoTitulo.textContent =bannerItems[i].titulo;
    elementoDescricao.textContent = bannerItems[i].descricao;

    i++;
    if( i >= bannerItems.length){
        i=0;
    }
    setTimeout(slideShow, tempo);
}

slideShow();