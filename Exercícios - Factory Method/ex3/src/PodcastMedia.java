public class PodcastMedia implements Media {
    @Override
    public void play() {
        System.out.println("Iniciando podcast... [PODCAST]");
    }

    @Override
    public void stop() {
        System.out.println("Podcast pausado ||");
    }
}