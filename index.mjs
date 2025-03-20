import fs from "node:fs";

const medidaRegex = new RegExp(
  /\b(\d+)\s?(L|litro|litros|kg|quilo|grama|gramas|g|ml|mL)\b/gi
);

function normalizarMedida(texto) {
  return texto.replace(medidaRegex, (match, quantidade, unidade) => {
    const conversao = {
      litro: "L",
      litros: "L",
      ml: "mL",
      mL: "mL",
      quilo: "kg",
      kg: "kg",
      grama: "g",
      gramas: "g",
      g: "g",
    };
    return `${quantidade}${conversao[unidade.toLowerCase()] || unidade}`;
  });
}

function limparTitulo(titulo) {
  return normalizarMedida(titulo.toLowerCase())
    .replace(/[^a-z0-9\s]/g, "") 
    .split(" ")
    .sort()
    .join(" ");
}

async function processarProdutos() {
  const dados = JSON.parse(fs.readFileSync("./data01.json", "utf8"));
  let categorias = new Map();

  for (let produto of dados) {
    let tituloNormalizado = limparTitulo(produto.title);
    let categoriaChave = `${tituloNormalizado}`;

    if (!categorias.has(categoriaChave)) {
      categorias.set(categoriaChave, {
        category: produto.title,
        count: 0,
        products: []
      });
    }

    let categoria = categorias.get(categoriaChave);
    categoria.count++;
    categoria.products.push({
      title: produto.title,
      supermarket: produto.supermarket
    });
  }

  const resultado = Array.from(categorias.values());
  fs.writeFileSync("resultado.json", JSON.stringify(resultado, null, 2));
  console.log("Categorização concluída! Verifique o arquivo resultado.json");
}

processarProdutos();