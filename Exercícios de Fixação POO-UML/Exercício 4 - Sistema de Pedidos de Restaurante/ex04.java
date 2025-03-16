class Item {
    private String nome;
    private double preco;

    public Item(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }
}

class Pedido {
    protected int numero;
    protected List<Item> itens;

    public Pedido(int numero) {
        this.numero = numero;
        this.itens = new ArrayList<>();
    }

    public void adicionarItem(Item item) {
        itens.add(item);
    }

    public double calcularTotal() {
        return itens.stream().mapToDouble(Item::getPreco).sum();
    }
}

class PedidoDelivery extends Pedido {
    private double taxaEntrega;

    public PedidoDelivery(int numero, double taxaEntrega) {
        super(numero);
        this.taxaEntrega = taxaEntrega;
    }

    @Override
    public double calcularTotal() {
        return super.calcularTotal() + taxaEntrega;
    }
}

public class Main {
    public static void main(String[] args) {
        Pedido pedidoLocal = new Pedido(1);
        pedidoLocal.adicionarItem(new Item("Salada", 18.5));
        pedidoLocal.adicionarItem(new Item("Água", 3.0));
        System.out.printf("Pedido local: R$%.2f%n", pedidoLocal.calcularTotal());

        // Pedido delivery
        PedidoDelivery pedidoCasa = new PedidoDelivery(2, 8.0);
        pedidoCasa.adicionarItem(new Item("Pizza", 45.0));
        pedidoCasa.adicionarItem(new Item("Refri", 7.5));
        System.out.printf("Pedido delivery: R$%.2f%n", pedidoCasa.calcularTotal());
    }
}