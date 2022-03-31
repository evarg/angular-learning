import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { GrainComponent } from './grain/grain.component';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from "./material.module"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GrainsListComponent } from './pages/grains/grains-list/grains-list.component';
import { GrainsFormAddComponent } from './pages/grains/grains-form-add/grains-form-add.component';
import { GrainsFormChangeComponent } from './pages/grains/grains-form-change/grains-form-change.component';
import { GrainsDetailsComponent } from './pages/grains/grains-details/grains-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOption, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'

const routes: Routes = [
  { path: '', component: GrainComponent },
  { path: 'grains', component: GrainsListComponent },
  { path: 'grains/add', component: GrainsFormAddComponent },
  { path: 'grains/change/:id', component: GrainsFormChangeComponent },
  { path: 'grains/details/:id', component: GrainsDetailsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    GrainComponent,
    HeaderComponent,
    GrainsListComponent,
    GrainsFormAddComponent,
    GrainsFormChangeComponent,
    GrainsDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
