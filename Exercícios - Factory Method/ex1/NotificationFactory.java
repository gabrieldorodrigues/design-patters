public class NotificationFactory {
    public enum NotificationType {
        EMAIL, SMS
    }

    public static Notification createNotification(NotificationType type) {
        switch (type) {
            case EMAIL:
                return new EmailNotification();
            case SMS:
                return new SMSNotification();
            default:
                throw new IllegalArgumentException("Tipo não suportado");
        }
    }
}