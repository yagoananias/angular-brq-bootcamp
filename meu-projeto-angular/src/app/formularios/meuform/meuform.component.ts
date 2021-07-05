import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-meuform',
  templateUrl: './meuform.component.html',
  styleUrls: ['./meuform.component.css']
})
export class MeuformComponent implements OnInit {

  @Output() meuForm: FormGroup;

  constructor(private cepService : CepService) { }

  ngOnInit(): void {

    this.meuForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email, Validators.min(3)]),
        password: new FormControl(null, [Validators.required]),
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
    this.cepService.getCep(this.meuForm.controls.cep.value).subscribe(
      (cepe : any) => {
        console.log(cepe);
        this.meuForm.patchValue(
            cepe
        )
      }
    )
  }

}
