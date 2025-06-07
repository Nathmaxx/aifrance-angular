import { Component } from '@angular/core';
import { FiltresComponent } from '../filtres/filtres.component';
import { ListeVolsComponent } from '../liste-vols/liste-vols.component';
import { ListePassagersComponent } from '../liste-passagers/liste-passagers.component';
import { IFilters } from '../../models/filters.model';

@Component({
    selector: 'app-view-airfrance',
    imports: [FiltresComponent, ListeVolsComponent, ListePassagersComponent],
    templateUrl: './view-airfrance.component.html',
})
export class ViewAirFranceComponent {
    filters: IFilters | null = null

    receiveFilters(filters: IFilters) {
        this.filters = filters
        console.log(this.filters)
    }
}
