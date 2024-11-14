
const tituloSimples = document.createElement("title");

tituloSimples.innerText = "Atividade Proz Titulo Simples"
tituloSimples.id = "titulo"

let titulonovo = document.querySelector("title");
titulonovo.appendChild(tituloSimples);

console.log(tituloSimples);


const novaVenda = document.createElement("div");
novaVenda.id = "newProduct";

let novaVenda1 = document.querySelector("div");
titulonovo.appendChild(novaVenda);

console.log(novaVenda);

novaVenda.innerHTML = `
<img src="/img/camisetaProz.png" alt="Camiseta Vermelha" width="100%" height="100%">
<h2 class="nome">Camista</h2>
<p class="descrition">Camiseta Vermelha estampada.</p>
<p><strong> Preço: R$ 49.90</strong></p>

`


