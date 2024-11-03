// Classe Conta
class Conta {
    constructor(nomeCorrentista, banco, numero, saldo) {
      this.nomeCorrentista = nomeCorrentista;
      this.banco = banco;
      this.numero = numero;
      this.saldo = saldo;
    }
  
    // Métodos get e set para cada propriedade
    get nomeCorrentista() {
      return this._nomeCorrentista;
    }
  
    set nomeCorrentista(nome) {
      this._nomeCorrentista = nome;
    }
  
    get banco() {
      return this._banco;
    }
  
    set banco(banco) {
      this._banco = banco;
    }
  
    get numero() {
      return this._numero;
    }
  
    set numero(numero) {
      this._numero = numero;
    }
  
    get saldo() {
      return this._saldo;
    }
  
    set saldo(saldo) {
      this._saldo = saldo;
    }
  }
  
  // Subclasse ContaCorrente
  class ContaCorrente extends Conta {
    constructor(nomeCorrentista, banco, numero, saldo, saldoEspecial) {
      super(nomeCorrentista, banco, numero, saldo);
      this.saldoEspecial = saldoEspecial;
    }
  
    get saldoEspecial() {
      return this._saldoEspecial;
    }
  
    set saldoEspecial(saldoEspecial) {
      this._saldoEspecial = saldoEspecial;
    }
  }
  
  // Subclasse ContaPoupanca
  class ContaPoupanca extends Conta {
    constructor(nomeCorrentista, banco, numero, saldo, juros, dataVencimento) {
      super(nomeCorrentista, banco, numero, saldo);
      this.juros = juros;
      this.dataVencimento = dataVencimento;
    }
  
    get juros() {
      return this._juros;
    }
  
    set juros(juros) {
      this._juros = juros;
    }
  
    get dataVencimento() {
      return this._dataVencimento;
    }
  
    set dataVencimento(data) {
      this._dataVencimento = data;
    }
  }
  
  // Criando objetos usando prompt para receber os dados
  const nomeCorrentista = prompt("Digite o nome do correntista:");
  const banco = prompt("Digite o banco:");
  const numero = prompt("Digite o número da conta:");
  const saldo = parseFloat(prompt("Digite o saldo inicial:"));
  
  // Conta Corrente com saldo especial
  const saldoEspecial = parseFloat(prompt("Digite o saldo especial para conta corrente:"));
  const contaCorrente = new ContaCorrente(nomeCorrentista, banco, numero, saldo, saldoEspecial);
  
  // Conta Poupança com juros e data de vencimento
  const juros = parseFloat(prompt("Digite o juros para conta poupança:"));
  const dataVencimento = prompt("Digite a data de vencimento para conta poupança:");
  const contaPoupanca = new ContaPoupanca(nomeCorrentista, banco, numero, saldo, juros, dataVencimento);
  
  // Exibindo os dados de cada conta
  console.log("Conta Corrente:");
  console.log(`Nome: ${contaCorrente.nomeCorrentista}`);
  console.log(`Banco: ${contaCorrente.banco}`);
  console.log(`Número da Conta: ${contaCorrente.numero}`);
  console.log(`Saldo: ${contaCorrente.saldo}`);
  console.log(`Saldo Especial: ${contaCorrente.saldoEspecial}`);
  
  console.log("Conta Poupança:");
  console.log(`Nome: ${contaPoupanca.nomeCorrentista}`);
  console.log(`Banco: ${contaPoupanca.banco}`);
  console.log(`Número da Conta: ${contaPoupanca.numero}`);
  console.log(`Saldo: ${contaPoupanca.saldo}`);
  console.log(`Juros: ${contaPoupanca.juros}`);
  console.log(`Data de Vencimento: ${contaPoupanca.dataVencimento}`);
  
  