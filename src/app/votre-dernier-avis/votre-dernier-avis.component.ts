import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Avis } from '../shared/domain/avis';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {

  avis: Avis
  constructor(private _collegueService: CollegueService) { }

  ngOnInit() {
    this._collegueService.obtenirDernierAvis().subscribe(a => this.avis = a)
  }

}
