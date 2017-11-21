import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  etat: boolean
  constructor(private _collegueService: CollegueService) { }

  ngOnInit() {
    this._collegueService.obtenirConnexion().subscribe(connexion => {this.etat = connexion})
  }

}
