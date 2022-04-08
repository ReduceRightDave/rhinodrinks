import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Event } from '../shared/interfaces';

@Component({
    selector: 'app-drinks-details-dialog',
    templateUrl: './drinks-details-dialog.component.html',
    styleUrls: ['./drinks-details-dialog.component.scss'],
})
export class DrinksDetailsDialogComponent {
    iconPath = '/assets/images/REPLACE-icon.png';

    constructor(@Inject(MAT_DIALOG_DATA) public eventData: Event) {}

    getIconPath(eventType: string): string {
        eventType = eventType.replace(/S$/, '').toLowerCase();
        return this.iconPath.replace('REPLACE', eventType);
    }
}
