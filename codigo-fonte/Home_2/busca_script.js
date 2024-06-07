document.addEventListener("DOMContentLoaded", function () {
  const locais = [
    { nome: "Restaurante A", cidade: "São Paulo", tipo: "Restaurante" },
    { nome: "Pousada B", cidade: "Rio de Janeiro", tipo: "Hospedagem" },
    { nome: "Serviço C", cidade: "Belo Horizonte", tipo: "Serviços" },
    // Adicione mais locais conforme necessário
  ];

  const botaoBuscar = document.getElementById("botao-buscar");
  const campoBusca = document.getElementById("busca");

  function realizarBusca() {
    const termoBusca = campoBusca.value.toLowerCase();
    window.location.href = `results.html?search=${termoBusca}`;
  }

  if (botaoBuscar) {
    botaoBuscar.addEventListener("click", realizarBusca);
  }

  if (campoBusca) {
    campoBusca.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        realizarBusca();
      }
    });
  }

  const resultadosContainer = document.getElementById("resultados");
  if (resultadosContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const termoBusca = urlParams.get("search").toLowerCase();
    const resultados = locais.filter(
      (local) =>
        local.nome.toLowerCase().includes(termoBusca) ||
        local.cidade.toLowerCase().includes(termoBusca) ||
        local.tipo.toLowerCase().includes(termoBusca)
    );

    exibirResultados(resultados, resultadosContainer);
  }

  function exibirResultados(resultados, container) {
    container.innerHTML = "";

    if (resultados.length === 0) {
      container.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    } else {
      resultados.forEach((local) => {
        const divLocal = document.createElement("div");
        divLocal.classList.add("resultado-item");
        divLocal.innerHTML = `<h3>${local.nome}</h3><p>${local.cidade}</p><p>${local.tipo}</p>`;
        container.appendChild(divLocal);
      });
    }
  }
});
