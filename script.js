const imagens = document.querySelectorAll(".imagem img");
const nadas = document.querySelectorAll(".imagem");

// function esconder(){
//     for (let imagem of imagens){
//         imagem.classList.add("escondido");
//     }
       
// }

// esconder();

function aparecer(){
    for( imagem of imagens){
        this.classList.add("escondido");
    }
  
    
}

for (let nada of nadas){
    nada.onclick = aparecer;
    
}

// nadas[3].onclick= aparecer;

// function esconder(){
//     for (let imagem of imagens){
//         imagem.classList.add("escondido");
//     }
    
// }
// esconder();

// for(let nada of nadas){
//     nada.onclick =  imagem.classList.remove("escondido");
// }
