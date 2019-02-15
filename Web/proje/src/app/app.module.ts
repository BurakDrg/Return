import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DenemeComponent } from './deneme/deneme.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { MatTableModule,MatPaginatorModule,MatSortModule,MatFormFieldModule,MatSelectModule,MatButtonModule,MatCheckboxModule,MatBadgeModule ,MatMenuModule,MatIconModule,MatListModule,MatDividerModule} from  '@angular/material';
import 'hammerjs';




@NgModule({
  declarations: [
    AppComponent,
    DenemeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    AgmCoreModule.forRoot({
      apiKey: ''// PUT MAPS API KEY HERE
    })
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
