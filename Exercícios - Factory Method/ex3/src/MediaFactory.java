public class MediaFactory {
    public enum MediaType {
        AUDIO, VIDEO, PODCAST
    }

    public static Media createMedia(MediaType type) {
        if (type == null) {
            throw new IllegalArgumentException("Tipo de mídia não pode ser nulo");
        }
        
        switch (type) {
            case AUDIO:
                return new AudioMedia();
            case VIDEO:
                return new VideoMedia();
            case PODCAST:
                return new PodcastMedia();
            default:
                throw new IllegalArgumentException("Tipo inválido: " + type);
        }
    }
}