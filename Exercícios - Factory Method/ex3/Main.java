public class Main {
    public static void main(String[] args) {
        testarMidia(MediaFactory.MediaType.AUDIO);
        testarMidia(MediaFactory.MediaType.VIDEO);
        testarMidia(MediaFactory.MediaType.PODCAST);
        
        testarMidiaInvalida();
    }

    private static void testarMidia(MediaFactory.MediaType type) {
        try {
            Media midia = MediaFactory.createMedia(type);
            midia.play();
            midia.stop();
            System.out.println();
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }

    private static void testarMidiaInvalida() {
        try {
            // Teste com tipo inválido
            MediaFactory.createMedia(null);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro esperado: " + e.getMessage());
        }
    }
}