const Vaga = require("./Vaga");
class VagaFrontEnd extends Vaga

 {
    constructor(id, empresa, cargo, requisitos, salario, modalidade, requerExperienciaFigma) {
        super(id, empresa, cargo, requisitos, salario, modalidade);
        this.requerExperienciaFigma = requerExperienciaFigma;
    }
    
    exibirRequerExperienciaFigma() {
        if (this.requerExperienciaFigma) {
            return "É necessária experiência em Figma"
        }
        return "Não é necessária experiência em Figma.";
    }
}
module.exports = VagaFrontEnd;