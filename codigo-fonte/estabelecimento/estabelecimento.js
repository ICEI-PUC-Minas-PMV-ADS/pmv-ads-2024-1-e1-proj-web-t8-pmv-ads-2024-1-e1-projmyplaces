document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".avaliacao-form .estrelas span");
  let rating = 0;

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.style.color = "gold";
        } else {
          s.style.color = "#ccc";
        }
      });
    });

    star.addEventListener("click", () => {
      rating = index + 1;
      stars.forEach((s, i) => {
        if (i < rating) {
          s.style.color = "gold";
        } else {
          s.style.color = "#ccc";
        }
      });
    });

    star.addEventListener("mouseout", () => {
      stars.forEach((s, i) => {
        if (i < rating) {
          s.style.color = "gold";
        } else {
          s.style.color = "#ccc";
        }
      });
    });
  });

  const enviarBtn = document.querySelector(".botao-enviar");
  const comentariosContainer = document.getElementById("comentarios");
  const comentarioTextarea = document.getElementById("comentario");

  enviarBtn.addEventListener("click", () => {
    const comentario = comentarioTextarea.value.trim();
    if (rating > 0 && comentario !== "") {
      const avaliacao = {
        rating: rating,
        comentario: comentario,
        data: new Date().toLocaleDateString("pt-BR"),
      };

      let avaliacoes = JSON.parse(localStorage.getItem("avaliacoes")) || [];
      avaliacoes.push(avaliacao);
      localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));

      renderAvaliacoes();
      comentarioTextarea.value = "";
      rating = 0;
      stars.forEach((s) => (s.style.color = "#ccc"));
    }
  });
});

const enviarBtn = document.querySelector(".botao-enviar");
const comentariosContainer = document.getElementById("comentarios");
const comentarioTextarea = document.getElementById("comentario");
const stars = document.querySelectorAll(".estrela");
let rating = 0; // Valor inicial da avaliação

// Função para calcular a média das avaliações
function calcularMedia(avaliacoes) {
  if (avaliacoes.length === 0) return 0;
  const soma = avaliacoes.reduce((acc, avaliacao) => acc + avaliacao.rating, 0);
  return (soma / avaliacoes.length).toFixed(1);
}

// Função para atualizar a exibição da média das avaliações
function atualizarMedia() {
  const avaliacoes = JSON.parse(localStorage.getItem("avaliacoes")) || [];
  const media = calcularMedia(avaliacoes);
  const mediaElemento = document.querySelector("#media-aval");
  mediaElemento.textContent = media;
}

// Função para renderizar as avaliações
function renderAvaliacoes() {
  const avaliacoes = JSON.parse(localStorage.getItem("avaliacoes")) || [];
  // Ordena as avaliações do mais recente para o mais antigo
  avaliacoes.sort((a, b) => new Date(b.data) - new Date(a.data));

  comentariosContainer.innerHTML =
    "<h3>Avaliações (" + avaliacoes.length + ")</h3>";
  avaliacoes.forEach((avaliacao) => {
    const comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");
    comentarioDiv.innerHTML = `
            <span class="nota">${avaliacao.rating}</span>
            <span class="estrelas">${"★".repeat(avaliacao.rating)}${"☆".repeat(
      5 - avaliacao.rating
    )}</span>
            <span class="data">${avaliacao.data}</span>
            <h4>${avaliacao.usuario || "Anônimo"}</h4>
            <p>${avaliacao.comentario}</p>
        `;
    comentariosContainer.appendChild(comentarioDiv);
    comentariosContainer.appendChild(document.createElement("hr"));
  });
}

// Carregar avaliações e atualizar a média ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  renderAvaliacoes();
  atualizarMedia();
});
