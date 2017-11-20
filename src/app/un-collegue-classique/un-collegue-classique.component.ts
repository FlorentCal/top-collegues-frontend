import { Component, OnInit } from '@angular/core';
import { UnCollegueComponent } from '../un-collegue/un-collegue.component';
import { CollegueService } from '../shared/service/collegue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-collegue-classique',
  templateUrl: './un-collegue-classique.component.html',
  styleUrls: ['./un-collegue-classique.component.css']
})
export class UnCollegueClassiqueComponent extends UnCollegueComponent implements OnInit {

  constructor(collegueService: CollegueService , router: Router) {
    super(collegueService, router)
  }

  ngOnInit() {
  }

}
