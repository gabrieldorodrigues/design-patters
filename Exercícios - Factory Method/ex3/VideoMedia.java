public class VideoMedia implements Media {
    @Override
    public void play() {
        System.out.println("Reproduzindo video... [VÍDEO]");
    }

    @Override
    public void stop() {
        System.out.println("Video pausado ||");
    }
}