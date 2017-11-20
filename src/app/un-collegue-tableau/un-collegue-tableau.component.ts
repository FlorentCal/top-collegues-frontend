import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { UnCollegueComponent } from '../un-collegue/un-collegue.component';
import { Router } from '@angular/router';

@Component({
  selector: '[app-un-collegue-tableau]',
  templateUrl: './un-collegue-tableau.component.html',
  styleUrls: ['./un-collegue-tableau.component.css']
})
export class UnCollegueTableauComponent extends UnCollegueComponent implements OnInit {
  
  constructor(collegueService: CollegueService , router: Router) {
    super(collegueService, router)
  }
  
    ngOnInit() {
    }
}
