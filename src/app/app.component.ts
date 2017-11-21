import { Component } from '@angular/core'
import { Collegue } from './shared/domain/collegue'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks'
import { Subject } from 'rxjs/Subject'
import { debounceTime } from 'rxjs/operator/debounceTime'
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _success = new Subject<string>()
  private _error = new Subject<string>()
  successMessage: string
  errorMessage: string

  staticAlertClosed = false

  enableButton: boolean

  constructor(private _collegueService: CollegueService) {

  }

  ngOnInit() {
    
    this._collegueService.obtenirConnexion().subscribe(etat=> this.enableButton = etat)
    setTimeout(() => this.staticAlertClosed = true, 20000)

    this._error.subscribe((message) => this.errorMessage = message)
    debounceTime.call(this._error, 5000).subscribe(() => this.errorMessage = null)

    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {

    this._collegueService.sauvegarder(new Collegue(pseudo.value, imageUrl.value, 0))
    .subscribe(collegue => {
      this._success.next(`Le collègue ${collegue.nom} a été ajouté avec succès`)
      pseudo.value = ''
      imageUrl.value = ''
    }, excpetion => {
      this._error.next(excpetion.error.message)
      pseudo.focus()
    })

    return false
  }

  supprimer(collegue: Collegue) {
    //Todo
  }

}
