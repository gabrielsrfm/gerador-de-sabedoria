# • Gerador de Sabedoria

Aplicação web simples que consome a API pública [quotable.io](https://api.quotable.io) para exibir frases inspiradoras aleatórias com autor e categoria.

## • Funcionalidades

- Busca frases reais de uma API pública a cada clique
- Exibe autor e categoria da frase
- Fallback automático para frases locais caso a API esteja indisponível
- Alternância manual entre a API externa e o banco local
- Interface responsiva e minimalista

## • Tecnologias

- HTML5
- CSS3
- JavaScript (Fetch API)

## • Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gerador-de-sabedoria.git
   ```
2. Abra o arquivo `index.html` no navegador.

> Nenhuma instalação ou dependência necessária.

## • API utilizada

[quotable.io](https://api.quotable.io) — API gratuita e open source de citações em inglês.

Endpoint utilizado:
```
GET https://api.quotable.io/random
```

## • Estrutura

```
gerador-de-sabedoria/
├── index.html
├── style.css
└── script.js
```

## • Licença

MIT
