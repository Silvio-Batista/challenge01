# Documentação - Categorização Inteligente de Produtos

## 📌 Visão Geral
Este projeto tem como objetivo **categorizar produtos de supermercado** considerando variações na descrição, ordem das palavras e unidades de medida. O sistema agrupa produtos equivalentes, diferencia produtos similares e separa itens com quantidades diferentes.

## 🎯 Regras de Categorização
1. **Produtos equivalentes de diferentes supermercados** são agrupados, mesmo que tenham descrições ligeiramente diferentes.
   - Exemplo: *"Arroz Branco Tio João 5kg"* e *"Arroz Tio João Branco 5kg"* são considerados o mesmo produto.

2. **Produtos similares, mas distintos**, como arroz integral e arroz branco, são mantidos em categorias separadas.
   - Exemplo: *"Arroz Branco Tio João 5kg"* e *"Arroz Integral Tio João 5kg"* são diferentes.

3. **Produtos com tamanhos ou quantidades diferentes** são separados.
   - Exemplo: *"Leite Integral Italac 1L"* e *"Leite Integral Italac 2L"* são categorizados separadamente.

## 🛠 Tecnologias Utilizadas
- **Node.js** para processamento de dados.
- **Regex** para normalização de unidades de medida.
- **Map()** para agrupamento eficiente de produtos.
- **JSON** para entrada e saída dos dados.

## 🔍 Consideração sobre Machine Learning

Caso o volume de dados seja **muito grande**, pode ser interessante utilizar **Machine Learning (ML)** para aprimorar a categorização de produtos e torná-la mais escalável. Entretanto, para a escala atual do projeto, a abordagem baseada em regras já entrega um alto nível de precisão e desempenho.

## 📄 Como Executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute o script de categorização:
   ```bash
   node index.mjs
   ```
3. O resultado será gerado no arquivo **`resultado.json`**.

## 📌 Conclusão
Este projeto oferece uma **solução eficiente** para categorização de produtos sem a necessidade de ML, mantendo um **equilíbrio entre precisão e desempenho**. 🚀

