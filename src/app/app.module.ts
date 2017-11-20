import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { CollegueService } from './shared/service/collegue.service';
import { ClassiqueComponent } from './classique/classique.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TableauComponent } from './tableau/tableau.component';
import { UnCollegueClassiqueComponent } from './un-collegue-classique/un-collegue-classique.component';
import { UnCollegueTableauComponent } from './un-collegue-tableau/un-collegue-tableau.component';
import { ConteneurComponent } from './conteneur/conteneur.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { UnCollegueCarrouselComponent } from './un-collegue-carrousel/un-collegue-carrousel.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';

const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent },
  { path: 'tableau', component: TableauComponent },
  { path: 'carrousel', component: CarrouselComponent },
  { path: 'detail/:nom', component: DetailCollegueComponent },
  { path: '**', redirectTo: 'classique' }
];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    ClassiqueComponent,
    TableauComponent,
    UnCollegueClassiqueComponent,
    UnCollegueTableauComponent,
    ConteneurComponent,
    CarrouselComponent,
    UnCollegueCarrouselComponent,
    DetailCollegueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
