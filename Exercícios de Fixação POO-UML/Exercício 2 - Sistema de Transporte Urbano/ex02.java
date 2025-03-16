abstract class Veiculo {
    protected String modelo;
    protected String capacidade;

    public Veiculo(String modelo, String capacidade) {
        this.modelo = modelo;
        this.capacidade = capacidade;
    }

    public abstract double calcularConsumo(double distancia, int passageiros);
}

class Onibus extends Veiculo {
    private double consumoPorKm;

    public Onibus(String modelo, String capacidade, double consumoPorKm) {
        super(modelo, capacidade);
        this.consumoPorKm = consumoPorKm;
    }

    @Override
    public double calcularConsumo(double distancia, int passageiros) {
        return distancia * consumoPorKm;
    }
}

class Taxi extends Veiculo {
    private double taxaPorPassageiro;

    public Taxi(String modelo, String capacidade, double taxaPorPassageiro) {
        super(modelo, capacidade);
        this.taxaPorPassageiro = taxaPorPassageiro;
    }

    @Override
    public double calcularConsumo(double distancia, int passageiros) {
        return distancia * passageiros * taxaPorPassageiro;
    }
}

public class Main {
    public static void main(String[] args) {
        Veiculo onibus = new Onibus("Ônibus Urbano", "40 passageiros", 2.5);
        Veiculo taxi = new Taxi("Taxi Sedan", "4 passageiros", 1.2);

        System.out.println("Consumo do Ônibus para 100 km: " + onibus.calcularConsumo(100, 0) + " litros");
        System.out.println("Consumo do Táxi para 50 km com 3 passageiros: " + taxi.calcularConsumo(50, 3) + " litros");
    }
}
