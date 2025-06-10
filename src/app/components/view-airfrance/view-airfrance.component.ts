import { Component, SimpleChanges } from '@angular/core';
import { FiltresComponent } from '../filtres/filtres.component';
import { ListeVolsComponent } from '../liste-vols/liste-vols.component';
import { ListePassagersComponent } from '../liste-passagers/liste-passagers.component';
import { IFilters } from '../../models/filters.model';
import { VolService } from '../../services/vol.service';
import { Vol } from '../../models/vol.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view-airfrance',
    imports: [FiltresComponent, ListeVolsComponent, ListePassagersComponent],
    templateUrl: './view-airfrance.component.html',
})
export class ViewAirFranceComponent {
    filters: IFilters | null = null
    flights: Vol[] | [] = []

    selectedFlight!: Vol

    searchType: string = (this.activatedRoute.routeConfig && this.activatedRoute.routeConfig.path) || ""

    constructor(
        private flightService: VolService,
        private activatedRoute: ActivatedRoute
    ) { }

    receiveFilters(filters: IFilters) {
        const { airport, startDate, endDate } = filters

        const formattedStartDate = Math.floor(startDate.getTime() / 1000)
        const formattedEndDate = Math.floor(endDate.getTime() / 1000)
        this.flightService.getVols(airport.icao, formattedStartDate, formattedEndDate, this.translateSearchType())
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

    receiveFlight(flight: Vol) {
        this.selectedFlight = flight
        console.log(this.selectedFlight)
    }

    translateSearchType() {
        if (this.searchType === "decollages") {
            return "departure"
        } else if (this.searchType === "atterrissages") {
            return "arrival"
        } else {
            return "departure"
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['searchType']) {
            console.log('Nouvelle valeur :', changes['searchType'].currentValue);
        }
    }
}
