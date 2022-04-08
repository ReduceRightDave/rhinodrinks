import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { GoogleMapsModule } from '@angular/google-maps';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { CoreModule } from './core/core.module';
import { DrinksDetailsDialogComponent } from './drinks-details-dialog/drinks-details-dialog.component';

@NgModule({
    declarations: [AppComponent, MapComponent, DrinksDetailsDialogComponent],
    imports: [
        BrowserModule,
        CoreModule,
        GoogleMapsModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        NoopAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
