public class SMSNotification extends Notification {
    @Override
    public void send(String message) {
        System.out.println("Enviando SMS: " + message);
    }
}