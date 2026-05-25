class Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modalidade) {
        this.id = id;
        this.empresa = empresa; 
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modalidade = modalidade;
    }
    exibirResumo() {
        return `${this.cargo} na empresa ${this.empresa}`;
    }
}
module.exports = Vaga;