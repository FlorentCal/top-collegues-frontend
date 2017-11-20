import { Component, OnInit } from '@angular/core';
import { ConteneurComponent } from '../conteneur/conteneur.component';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent  extends ConteneurComponent implements OnInit {
  
    constructor(collegueService: CollegueService) {
      super(collegueService)
     }

}
