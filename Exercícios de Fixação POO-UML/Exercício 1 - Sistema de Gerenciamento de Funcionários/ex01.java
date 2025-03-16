abstract class Funcionario {
    protected String nome;
    protected double salario;
    protected String cargo;

    public Funcionario(String nome, double salario, String cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    public abstract double calcularVencimentos();
}

class FuncionarioEfetivo extends Funcionario {
    private double bonusAnual;

    public FuncionarioEfetivo(String nome, double salario, String cargo, double bonusAnual) {
        super(nome, salario, cargo);
        this.bonusAnual = bonusAnual;
    }

    @Override
    public double calcularVencimentos() {
        return salario + bonusAnual;
    }
}

class FuncionarioTerceirizado extends Funcionario {
    private double custoPorProjeto;

    public FuncionarioTerceirizado(String nome, double salario, String cargo, double custoPorProjeto) {
        super(nome, salario, cargo);
        this.custoPorProjeto = custoPorProjeto;
    }

    @Override
    public double calcularVencimentos() {
        return salario + custoPorProjeto;
    }
}

public class Main {
    public static void main(String[] args) {
        Funcionario efetivo = new FuncionarioEfetivo("Carlos", 5000, "Analista", 2000);
        Funcionario terceirizado = new FuncionarioTerceirizado("Ana", 4000, "Desenvolvedora", 1500);

        System.out.println("Vencimentos do Funcionário Efetivo: " + efetivo.calcularVencimentos());
        System.out.println("Vencimentos do Funcionário Terceirizado: " + terceirizado.calcularVencimentos());
    }
}
