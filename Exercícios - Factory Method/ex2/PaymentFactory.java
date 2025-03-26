public class PaymentFactory {
    public enum PaymentType {
        CREDIT_CARD, PAYPAL, BOLETO
    }

    public static Payment createPayment(PaymentType type) {
        switch (type) {
            case CREDIT_CARD:
                return new CreditCardPayment();
            case PAYPAL:
                return new PayPalPayment();
            case BOLETO:
                return new BoletoPayment();
            default:
                throw new IllegalArgumentException("Método de pagamento inválido");
        }
    }
}