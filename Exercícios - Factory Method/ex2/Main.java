public class Main {
    public static void main(String[] args) {
        Payment cartao = PaymentFactory.createPayment(PaymentFactory.PaymentType.CREDIT_CARD);
        cartao.processPayment(299.90);
        
        Payment paypal = PaymentFactory.createPayment(PaymentFactory.PaymentType.PAYPAL);
        paypal.processPayment(150.00);
        
        Payment boleto = PaymentFactory.createPayment(PaymentFactory.PaymentType.BOLETO);
        boleto.processPayment(599.90);
    }
}