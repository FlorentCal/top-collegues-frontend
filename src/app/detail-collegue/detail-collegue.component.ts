import { Component, OnInit } from '@angular/core';
import { UnCollegueComponent } from '../un-collegue/un-collegue.component';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {

  collegue: Collegue
  constructor(private _collegueService: CollegueService, private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._collegueService.trouverCollegue(params['nom'])
        .subscribe(col => { this.collegue = col },
        exception => console.log(exception))
    })
  }

  jaime() {
    this._collegueService.aimerUnCollegue(this.collegue)
      .subscribe(col => { this.collegue = col },
      exception => console.log(exception))
  }
  jedeteste() {
    this._collegueService.detesterUnCollegue(this.collegue)
      .subscribe(col => { this.collegue = col },
      exception => console.log(exception))
  }

  back() {
    history.back()
  }

}
