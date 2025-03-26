public class PayPalPayment implements Payment {
    @Override
    public void processPayment(double amount) {
        System.out.printf("Pagamento de R$%.2f processado via PayPal%n", amount);
    }
}