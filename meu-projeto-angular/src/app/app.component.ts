import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-projeto-angular';

  salario : number = 4000;

  nome : string = 'BRQ';

  mostrarMensagem() {
    let outrNnome = 'Yagão';
    return outrNnome;
  }
}
