import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {

  meuForm : FormGroup | any;

  constructor(private formBuilder : FormBuilder,
    private crudService : CrudService,
    private router : Router) { }

  ngOnInit(): void {
    this.meuForm =this.formBuilder.group(
      {
        name : [ null, [Validators.required] ],
        email : [ null, [Validators.required, Validators.email] ],
        gender : [ null, [Validators.required] ],
        status : [ null, [Validators.required] ]
      }
    );
  }

  onSubmit(){
    console.log(this.meuForm)
    this.crudService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data)
          this.meuForm.reset();
          this.router.navigate(['/crud-list'])
        }
      );
  }

}
