import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meuform',
  templateUrl: './meuform.component.html',
  styleUrls: ['./meuform.component.css']
})
export class MeuformComponent implements OnInit {

  meuForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.meuForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required])

      }
    )

    console.log(this.meuForm)

  }

}
