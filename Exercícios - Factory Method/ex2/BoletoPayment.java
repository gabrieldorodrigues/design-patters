public class BoletoPayment implements Payment {
    @Override
    public void processPayment(double amount) {
        System.out.printf("Pagamento de R$%.2f processado via Boleto Bancário%n", amount);
    }
}