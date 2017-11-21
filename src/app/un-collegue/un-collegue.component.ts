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
  enableButton: boolean
  constructor(private _collegueService: CollegueService, private router: Router) {

  }

  ngOnInit() {
    this._collegueService.obtenirConnexion().subscribe(etat=> this.enableButton = etat)
  }

  jaime() {
    this._collegueService.aimerUnCollegue(this.collegue)
      .subscribe(col => this.collegue = col,
      exception => console.log(exception))
  }
  jedeteste() {
    this._collegueService.detesterUnCollegue(this.collegue)
      .subscribe(col => this.collegue = col,
      exception => console.log(exception))
  }

  displayDetail() {
    this.router.navigate([`/detail/${this.collegue.nom}`])
  }

  supprimer(collegue: Collegue){
    this._collegueService.supprimer(collegue)
  }

}
