const btnNew = document.getElementById("btn");
const btnApi = document.getElementById("btn-api");
const displayFrase = document.getElementById("frase");
const sourceLabel = document.getElementById("source-label");

const APIs = {
  quotable: {
    name: "quotable.io",
    url: "https://api.quotable.io/random",
    parse: (d) => ({
      text: d.content,
      author: d.author,
      category: d.tags?.[0] || "inspiração",
    }),
  },
  local: {
    name: "local (fallback)",
    data: [
      {
        text: "O sucesso é a soma de pequenos esforços.",
        author: "Robert Collier",
        category: "sucesso",
      },
      {
        text: "O código limpo é a base de um bom sistema.",
        author: "Robert C. Martin",
        category: "programação",
      },
      {
        text: "Simplicidade é o último grau de sofisticação.",
        author: "Leonardo da Vinci",
        category: "sabedoria",
      },
      {
        text: "Não tenha medo de errar, tenha medo de não tentar.",
        author: "Anônimo",
        category: "coragem",
      },
      {
        text: "A persistência é o caminho do êxito.",
        author: "Charles Chaplin",
        category: "motivação",
      },
    ],
  },
};

let currentApi = "quotable";
let loading = false;

async function fetchQuote() {
  if (loading) return;
  loading = true;
  btnNew.disabled = true;
  displayFrase.textContent = "Carregando...";

  const api = APIs[currentApi];
  sourceLabel.textContent = api.name;

  if (currentApi === "local") {
    const q = api.data[Math.floor(Math.random() * api.data.length)];
    renderQuote(q);
    loading = false;
    btnNew.disabled = false;
    return;
  }

  try {
    const res = await fetch(api.url);
    if (!res.ok) throw new Error("Erro " + res.status);
    const data = await res.json();
    renderQuote(api.parse(data));
  } catch (e) {
    const fallback =
      APIs.local.data[Math.floor(Math.random() * APIs.local.data.length)];
    sourceLabel.textContent = "local (fallback)";
    renderQuote(fallback);
  } finally {
    loading = false;
    btnNew.disabled = false;
  }
}

function renderQuote({ text, author, category }) {
  displayFrase.innerHTML = `
    <span class="quote-text">"${text}"</span><br>
    <span class="quote-author">— ${author}</span><br>
    <span class="quote-category">${category}</span>
  `;
}

btnNew.addEventListener("click", fetchQuote);

btnApi.addEventListener("click", () => {
  currentApi = currentApi === "quotable" ? "local" : "quotable";
  btnApi.textContent = "API: " + APIs[currentApi].name;
});

fetchQuote();
