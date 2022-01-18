import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.services';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})

export class ExternoComponent implements OnInit {

  public user: any
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.user = this.user
  }

  ngOnInit(): void {
    this._peticionesService.getUser().subscribe(
      result => {
        this.user = result
        console.log(this.user)
      },
      err => {
        console.log(<any>err)
      }
    )
  }

}
