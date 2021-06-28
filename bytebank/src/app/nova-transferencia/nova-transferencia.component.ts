import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor : number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência');

    if (this.ehValido()) {
      const valorEmitir = { valor: this.valor, destino: this.destino };
      this.aoTransferir.emit(valorEmitir);
    }
    this.limparCampos();

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

  private ehValido() {
    const valido = this.valor > 0.0;
    if (!valido) {
      this.valoresComErro.emit('Informe um valor válido!');
    }
    return valido;
}

}
