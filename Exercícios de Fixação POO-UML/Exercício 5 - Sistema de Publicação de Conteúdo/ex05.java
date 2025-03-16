public class Main {
    public static void main(String[] args) {
        Artigo artigo = new Artigo("Java Básico", "João Silva", "Introdução à linguagem Java", 1500);
        Video video = new Video("POO em Java", "Maria Souza", "Conceitos de Orientação a Objetos", 25);
        
        System.out.println(artigo.exibirResumo());
        System.out.println(video.exibirResumo());
    }
}

abstract class Publicacao {
    protected String titulo;
    protected String autor;
    protected String descricao;

    public Publicacao(String titulo, String autor, String descricao) {
        this.titulo = titulo;
        this.autor = autor;
        this.descricao = descricao;
    }

    public abstract String exibirResumo();
}

class Artigo extends Publicacao {
    private int numeroDePalavras;

    public Artigo(String titulo, String autor, String descricao, int numeroDePalavras) {
        super(titulo, autor, descricao);
        this.numeroDePalavras = numeroDePalavras;
    }

    @Override
    public String exibirResumo() {
        return "Artigo: " + titulo + " | Autor: " + autor + " | Palavras: " + numeroDePalavras;
    }
}

class Video extends Publicacao {
    private int duracao;

    public Video(String titulo, String autor, String descricao, int duracao) {
        super(titulo, autor, descricao);
        this.duracao = duracao;
    }

    @Override
    public String exibirResumo() {
        return "Vídeo: " + titulo + " | Autor: " + autor + " | Duração: " + duracao + " minutos";
    }
}