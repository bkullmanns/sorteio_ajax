let request = new XMLHttpRequest();
let sortear_form = document.getElementById("sortear-form");

let sorteados = 0;
let box_tabela = document.getElementById("box-tabela");

function sortear(evento) {
  evento.preventDefault();
  let form = new FormData(evento.target);
  let quantos = form.get("quantos");
  let maximo = form.get("maximo");
  sorteados += 1;

  if (quantos != "" && maximo != "") {
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        if (sorteados > 0) {
          box_tabela.classList.remove("hidden");
        }
        let resultado = document.getElementById("resultado");
        let valores = JSON.parse(request.responseText);
        let tr = document.createElement("tr");

        console.log(valores);

        let resultado_td = document.createElement("td");
        resultado_td.innerText = valores.valor;
        resultado_td.className = "border px-4 py-2";
        tr.appendChild(resultado_td);

        let quantidade_td = document.createElement("td");
        quantidade_td.innerText = valores.quantos;
        quantidade_td.className = "border px-4 py-2";
        tr.appendChild(quantidade_td);

        let maximo_td = document.createElement("td");
        maximo_td.innerText = valores.maximo;
        maximo_td.className = "border px-4 py-2";
        tr.appendChild(maximo_td);

        resultado.appendChild(tr);
      }
    };
    request.open("POST", "../src/sortear.php", true);
    request.send(form);
  } else {
    alert("os DOIS campos são obrigatórios!");
  }
}

sortear_form.addEventListener("submit", sortear);
