import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-meuform',
  templateUrl: './meuform.component.html',
  styleUrls: ['./meuform.component.css']
})
export class MeuformComponent implements OnInit {

  meuForm: FormGroup | any = null;

  constructor(private cepService : CepService) { }

  ngOnInit(): void {

    this.meuForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(3)]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        cep: new FormControl(null, [Validators.required]),
        logradouro: new FormControl(null, [Validators.required]),
        bairro: new FormControl(null, [Validators.required]),
        localidade: new FormControl(null, [Validators.required]),
        uf: new FormControl(null, [Validators.required]),

      }
    )

    console.log(this.meuForm)

  }

  onBuscarCep() {
    if(this.meuForm.controls.cep.value.length == 8 && this.isSomenteNumero(this.meuForm.controls.cep.value)) {
      this.cepService.getCep(this.meuForm.controls.cep.value).subscribe(
        (cepe : any) => {
          this.meuForm.patchValue(
              cepe
          )
        },
        (error: any) => {
          alert("Errouuu"),
          console.log(error)
        },
        () => {
          console.log("Sempre entra aqui(finally)")
        }
      )
    } else {
      alert("Cep inválido!")
    }

  }

  isSomenteNumero(value:string){
    return ((value != null) && (value !== '') &&
           !isNaN(Number(value.toString())));
  }

}
