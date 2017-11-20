import { Component, OnInit } from '@angular/core';
import { UnCollegueComponent } from '../un-collegue/un-collegue.component';
import { CollegueService } from '../shared/service/collegue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-collegue-carrousel',
  templateUrl: './un-collegue-carrousel.component.html',
  styleUrls: ['./un-collegue-carrousel.component.css']
})
export class UnCollegueCarrouselComponent extends UnCollegueComponent implements OnInit {

  constructor(collegueService: CollegueService , router: Router) {
    super(collegueService, router)
  }

  ngOnInit() {
  }
}
