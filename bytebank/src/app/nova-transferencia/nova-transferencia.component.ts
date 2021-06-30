import { Component, Output, EventEmitter } from "@angular/core";
import { TransferenciaService } from "services/transferencia.service";
import { Transferencia } from "../models/transferencia.model";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService) { }

  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
    },
    (error) => console.error(error));
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
