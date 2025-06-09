import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPassagerDto, Passager } from '../models/passager.model';
import { map, Observable, tap } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PassengerService {

	constructor(private http: HttpClient) { }

	getPassengers(icao: string): Observable<Passager[]> {
		const link = `https://randomuser.me/api/?results=20&inc=name,picture&seed=${icao}`
		return this.http.get<any>(link).pipe(
			map((response) => response.results
				.map((dto: IPassagerDto) => new Passager(dto))
			));

	}

	// https://randomuser.me/api/?results=20&inc=name,picture&seed=<numéro_icao>

}
