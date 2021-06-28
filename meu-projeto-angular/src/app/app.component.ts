import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-projeto-angular';

  salario : number = 4000;

  nomeEmpresa : string = 'BRQ';
  banana = "two way data binding";

  meuClique() {
    alert(this.title);
    //this.title = "ai dentro";
  }

  onKeyUp(valor : string) {
    console.log(valor);
  }
}
