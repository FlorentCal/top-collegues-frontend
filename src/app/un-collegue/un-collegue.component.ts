import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  constructor(private _collegueService: CollegueService, private router: Router) {

  }

  ngOnInit() {

  }

  jaime() {
    this._collegueService.aimerUnCollegue(this.collegue)
      .then(col => this.collegue = col)
      .catch(exception => console.log(exception))
  }
  jedeteste() {
    this._collegueService.detesterUnCollegue(this.collegue)
      .then(col => this.collegue = col)
  }

  displayDetail(){
    this.router.navigate([`/detail/${this.collegue.nom}`])
  }
}
