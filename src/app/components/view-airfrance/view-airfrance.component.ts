import { Component } from '@angular/core';
import { FiltresComponent } from '../filtres/filtres.component';
import { ListeVolsComponent } from '../liste-vols/liste-vols.component';
import { ListePassagersComponent } from '../liste-passagers/liste-passagers.component';
import { IFilters } from '../../models/filters.model';
import { VolService } from '../../services/vol.service';
import { Vol } from '../../models/vol.model';

@Component({
    selector: 'app-view-airfrance',
    imports: [FiltresComponent, ListeVolsComponent, ListePassagersComponent],
    templateUrl: './view-airfrance.component.html',
})
export class ViewAirFranceComponent {
    filters: IFilters | null = null
    flights: Vol[] | [] = []

    constructor(private flightService: VolService) { }

    receiveFilters(filters: IFilters) {
        const { airport, startDate, endDate } = filters

        const formattedStartDate = Math.floor(startDate.getTime() / 1000)
        const formattedEndDate = Math.floor(endDate.getTime() / 1000)
        this.flightService.getVolsDepart(airport.icao, formattedStartDate, formattedEndDate)
            .subscribe({
                next: (vols) => {
                    this.flights = vols
                    console.log(this.flights)
                },
                error: (error) => {
                    console.error('Erreur lors de la récupération des vols :', error);
                }
            });
    }
}
