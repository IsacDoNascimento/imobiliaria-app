// Desafio 1: Financiamento
function calcularFinanciamento() {
  const valor = parseFloat(document.getElementById('fin-valor').value) || 0;
  const entrada = parseFloat(document.getElementById('fin-entrada').value) || 0;
  const taxaAnual = parseFloat(document.getElementById('fin-juros').value) || 0;
  const anos = parseInt(document.getElementById('fin-anos').value) || 0;

  const saldo = valor - entrada;
  const meses = anos * 12;

  if (saldo <= 0 || meses <= 0) {
    document.getElementById('res-financiamento').innerText = "Forneça valores válidos maiores que zero.";
    return;
  }

  const taxaMensal = (taxaAnual / 100) / 12;
  let parcela = 0;

  if (taxaMensal > 0) {
    parcela = (saldo * taxaMensal) / (1 - Math.pow(1 + taxaMensal, -meses));
  } else {
    parcela = saldo / meses;
  }

  document.getElementById('res-financiamento').innerText = 
    `Saldo a Financiar: R$ ${saldo.toFixed(2)} | Parcela Mensal (${meses}x): R$ ${parcela.toFixed(2)}`;
}

// Desafio 2: Cálculo de Aluguel
function calcularAluguel() {
  const base = parseFloat(document.getElementById('alg-base').value) || 0;
  const condomino = parseFloat(document.getElementById('alg-cond').value) || 0;
  const iptu = parseFloat(document.getElementById('alg-iptu').value) || 0;

  const total = base + condomino + iptu;

  document.getElementById('res-aluguel').innerText = 
    `Total a Pagar: R$ ${total.toFixed(2)} (Aluguel: R$ ${base.toFixed(2)} + Cond: R$ ${condomino.toFixed(2)} + IPTU: R$ ${iptu.toFixed(2)})`;
}

// Desafio 3: Reajuste Anual
function calcularReajuste() {
  const atual = parseFloat(document.getElementById('reaj-atual').value) || 0;
  const taxa = parseFloat(document.getElementById('reaj-taxa').value) || 0;

  if (atual <= 0) {
    document.getElementById('res-reajuste').innerText = "Informe um valor de aluguel válido.";
    return;
  }

  const aumento = atual * (taxa / 100);
  const novoValor = atual + aumento;

  document.getElementById('res-reajuste').innerText = 
    `Novo Aluguel: R$ ${novoValor.toFixed(2)} (Aumento de R$ ${aumento.toFixed(2)})`;
}

// Desafio 4: Comparação por m²
function compararImoveis() {
  const p1 = parseFloat(document.getElementById('imp1-preco').value) || 0;
  const a1 = parseFloat(document.getElementById('imp1-area').value) || 0;
  const p2 = parseFloat(document.getElementById('imp2-preco').value) || 0;
  const a2 = parseFloat(document.getElementById('imp2-area').value) || 0;

  if (a1 <= 0 || a2 <= 0) {
    document.getElementById('res-comparacao').innerText = "Informe áreas maiores que zero.";
    return;
  }

  const m2_1 = p1 / a1;
  const m2_2 = p2 / a2;

  let msg = `Imóvel A: R$ ${m2_1.toFixed(2)}/m² | Imóvel B: R$ ${m2_2.toFixed(2)}/m² -> `;

  if (m2_1 < m2_2) {
    msg += "Imóvel A leva vantagem no custo/m².";
  } else if (m2_2 < m2_1) {
    msg += "Imóvel B leva vantagem no custo/m².";
  } else {
    msg += "Ambos possuem exatamente o mesmo custo/m².";
  }

  document.getElementById('res-comparacao').innerText = msg;
}

// Desafio 5: Ordenação de Preços
function ordenarPrecos() {
  const entrada = document.getElementById('ord-lista').value;

  if (!entrada.trim()) {
    document.getElementById('res-ordenacao').innerText = "Insira valores numéricos separados por vírgula.";
    return;
  }

  const lista = entrada
    .split(',')
    .map(v => parseFloat(v.trim()))
    .filter(v => !isNaN(v));

  if (lista.length === 0) {
    document.getElementById('res-ordenacao').innerText = "Nenhum número válido foi identificado.";
    return;
  }

  lista.sort((a, b) => a - b);

  const formatado = lista.map(v => `R$ ${v.toFixed(2)}`).join(' ➔ ');
  document.getElementById('res-ordenacao').innerText = `Ordem crescente: ${formatado}`;
}
