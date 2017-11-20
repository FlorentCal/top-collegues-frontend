import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue'
import { ConteneurComponent } from '../conteneur/conteneur.component';

@Component({
  selector: 'app-classique',
  templateUrl: './classique.component.html',
  styleUrls: ['./classique.component.css']
})
export class ClassiqueComponent extends ConteneurComponent implements OnInit {

  constructor(collegueService: CollegueService) {
    super(collegueService)
   }

}
