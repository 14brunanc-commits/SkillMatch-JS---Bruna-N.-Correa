class VagaFrontEnd extends Vaga

 {
    constructor(titulo, area, habilidadesRequeridas, experienciaMinimaMeses, requerExperienciaFigma) {
        super(titulo, area, habilidadesRequeridas, experienciaMinimaMeses);
        this.requerExperienciaFigma = requerExperienciaFigma;
    }
    
    exibirRequerExperienciaFigma() {
        if (this.requerExperienciaFigma) {
            return "É necessária experiência em Figma"
        }
        return "Não é necessária experiência em Figma.";
    }
}