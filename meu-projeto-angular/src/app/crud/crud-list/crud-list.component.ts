import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {

  usuarios : any = null;

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.crudService.getAll().subscribe(
      (data) => {
        this.usuarios = data;
      }
    );
  }

}
