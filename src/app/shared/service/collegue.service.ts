import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class CollegueService {

  // données en mémoire
  collegues: Collegue[] = [

  ]

  constructor(private http: HttpClient) {

  }

  listerCollegues(): Promise<Collegue[]> {
    return this.http.get<Collegue[]>(environment.apiUrl + '/collegues').toPromise()
  }

  trouverCollegue(nom: string): Promise<Collegue> {
    return this.http.get<Collegue>(environment.apiUrl + `/collegues/detail/${nom}`).toPromise()
  }

  sauvegarder(newCollegue: Collegue): Promise<Collegue> {
    return this.http.post<Collegue>(environment.apiUrl + '/collegues', newCollegue, httpOptions).toPromise()
  }

  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.http.put<Collegue>(environment.apiUrl + '/collegues/' + unCollegue.nom + '/score', 10, httpOptions).toPromise()
  }

  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.http.put<Collegue>(environment.apiUrl + '/collegues/' + unCollegue.nom + '/score', -5, httpOptions).toPromise()
  }

  supprimer(collegue: Collegue) {
    //TODO
  }
}