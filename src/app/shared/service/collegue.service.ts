import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Avis } from '../domain/avis';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class CollegueService {

  // données en mémoire
  colleguesSubject: BehaviorSubject<Collegue[]> = new BehaviorSubject([])
  avisSubject: BehaviorSubject<Avis> = new BehaviorSubject(null)
  connexionSubject: BehaviorSubject<boolean> = new BehaviorSubject(null)

  collegues: Collegue[]

  constructor(private http: HttpClient) {
    this.testerConnexion()
    Observable.interval(5000).subscribe(value => this.testerConnexion())
  }

  refresh(): void {
    this.http.get<Collegue[]>(`${environment.apiUrl}/collegues`)
      .subscribe(cols => this.colleguesSubject.next(cols))
  }

  listerCollegues(): Observable<Collegue[]> {
    this.refresh()
    return this.colleguesSubject.asObservable()
  }

  trouverCollegue(nom: string): Observable<Collegue> {
    return this.http.get<Collegue>(`${environment.apiUrl}/collegues/detail/${nom}`)
  }

  sauvegarder(newCollegue: Collegue): Observable<Collegue> {
    this.colleguesSubject.next(this.collegues)
    this.refresh()
    return this.http.post<Collegue>(`${environment.apiUrl}/collegues`, newCollegue, httpOptions)
  }

  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    this.avisSubject.next(new Avis(unCollegue, true))
    return this.http.put<Collegue>(`${environment.apiUrl}/collegues/${unCollegue.nom}/score`, 10, httpOptions)
  }

  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    this.avisSubject.next(new Avis(unCollegue, false))
    return this.http.put<Collegue>(`${environment.apiUrl}/collegues/${unCollegue.nom}/score`, -5, httpOptions)
  }

  obtenirDernierAvis(): BehaviorSubject<Avis> {
    return this.avisSubject
  }

  obtenirConnexion(): BehaviorSubject<boolean> {
    return this.connexionSubject
  }

  testerConnexion(): void {
    this.http.get<boolean>(environment.apiUrl + `/connexion`)
      .subscribe(connexion => 
        this.connexionSubject.next(true),
        error => this.connexionSubject.next(false))
  }

  supprimer(unCollegue: Collegue): void {
    this.http.delete<Collegue>(`${environment.apiUrl}/collegues/${unCollegue.nom}`)
      .subscribe(collegueSupprime => {
        let newTab = this.colleguesSubject.getValue().filter(col => col.nom != collegueSupprime.nom)
        this.colleguesSubject.next(newTab)
      })
  }


}