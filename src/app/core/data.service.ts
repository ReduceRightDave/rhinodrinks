import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from '../shared/interfaces';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private eventsURL = 'https://mock-api.drinks.test.siliconrhino.io/events';

    constructor(private http: HttpClient) {}

    getAllDrinkEvents(): Observable<Event[]> {
        return this.http.get<Event[]>(this.eventsURL);
    }
}
