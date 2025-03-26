public class Main {
    public static void main(String[] args) {
        Notification email = NotificationFactory.createNotification(NotificationFactory.NotificationType.EMAIL);
        email.send("Bem-vindo ao serviço!");
        
        Notification sms = NotificationFactory.createNotification(NotificationFactory.NotificationType.SMS);
        sms.send("Código: 1234");
    }
}