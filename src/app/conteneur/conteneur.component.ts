import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-conteneur',
  templateUrl: './conteneur.component.html',
  styleUrls: ['./conteneur.component.css']
})
export class ConteneurComponent implements OnInit {

  collegues: Collegue[]
  public limite: number
  public filtre: string

  constructor(private _collegueService: CollegueService) {
  }

  ngOnInit() {
    this._collegueService.listerCollegues()
      .then(data => { return this.collegues = data })
      .catch(exception => console.log(exception))
  }

  changerLimite($event) {
    this.limite = <number>$event.target.value
  }

  filtrerPseudo($event) {
    this.filtre = $event.target.value
  }

}
