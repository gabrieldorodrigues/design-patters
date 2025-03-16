abstract class ContaBancaria {
    protected String numero;
    protected double saldo;

    public ContaBancaria(String numero, double saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }

    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
        }
    }

    public abstract boolean sacar(double valor);
}

class ContaCorrente extends ContaBancaria {
    private double limiteChequeEspecial;

    public ContaCorrente(String numero, double saldo, double limiteChequeEspecial) {
        super(numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    @Override
    public boolean sacar(double valor) {
        if (valor > 0 && saldo + limiteChequeEspecial >= valor) {
            saldo -= valor;
            return true;
        }
        return false;
    }
}

class ContaPoupanca extends ContaBancaria {
    private double taxaJuros;

    public ContaPoupanca(String numero, double saldo, double taxaJuros) {
        super(numero, saldo);
        this.taxaJuros = taxaJuros;
    }

    public void aplicarJuros() {
        saldo += saldo * taxaJuros / 100;
    }

    @Override
    public boolean sacar(double valor) {
        if (valor > 0 && saldo >= valor) {
            saldo -= valor;
            return true;
        }
        return false;
    }
}

public class Main {
    public static void main(String[] args) {
        ContaBancaria corrente = new ContaCorrente("12345", 1000, 500);
        ContaBancaria poupanca = new ContaPoupanca("67890", 2000, 1.5);

        corrente.sacar(1200);
        ((ContaPoupanca) poupanca).aplicarJuros();

        System.out.println("Saldo da Conta Corrente: " + corrente.saldo);
        System.out.println("Saldo da Conta Poupança após juros: " + poupanca.saldo);
    }
}
