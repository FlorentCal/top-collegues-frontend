import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';
import { ConteneurComponent } from '../conteneur/conteneur.component';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent extends ConteneurComponent implements OnInit {

  constructor(collegueService: CollegueService) { 
    super(collegueService)
  }

}
