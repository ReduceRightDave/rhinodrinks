import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { DataService } from '../core/data.service';
import { DrinksDetailsDialogComponent } from '../drinks-details-dialog/drinks-details-dialog.component';
import { Event } from '../shared/interfaces';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
    //London coords
    center: google.maps.LatLngLiteral = { lat: 51.509865, lng: -0.118092 };

    zoom = 10;

    markerOptions: google.maps.MarkerOptions = {
        draggable: false,
    };

    drinksEvents: Event[] = [];

    constructor(private dataService: DataService, public dialog: MatDialog) {}

    ngOnInit(): void {
        this.dataService.getAllDrinkEvents().subscribe((events: Event[]) => {
            this.drinksEvents = events;
            console.log(this.drinksEvents);
        });
    }

    markerClicked(drinksEvent: Event) {
        this.dialog.open(DrinksDetailsDialogComponent, {
            data: drinksEvent,
        });
    }
}
