public class CreditCardPayment implements Payment {
    @Override
    public void processPayment(double amount) {
        System.out.printf("Pagamento de R$%.2f processado via Cartão de Crédito%n", amount);
    }
}