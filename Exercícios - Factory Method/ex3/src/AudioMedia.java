public class AudioMedia implements Media {
    @Override
    public void play() {
        System.out.println("Reproduzindo audio... [ÁUDIO]");
    }

    @Override
    public void stop() {
        System.out.println("Audio pausado ||");
    }
}