import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Vol } from '../../models/vol.model';
import { VolComponent } from "../vol/vol.component";
import { CommonModule } from '@angular/common';
import { PassengerService } from '../../services/passengers.service';
import { Passager } from '../../models/passager.model';

@Component({
    selector: 'app-liste-passagers',
    imports: [VolComponent, CommonModule],
    templateUrl: './liste-passagers.component.html',
})
export class ListePassagersComponent implements OnChanges {

    @Input() flight!: Vol
    flightIsValid: boolean = false;
    passengers!: Passager[]

    constructor(private passengersService: PassengerService) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['flight']) {
            this.flightIsValid = this.isNotNull();
            if (this.flightIsValid) {
                this.passengersService.getPassengers(this.flight.icao)
                    .subscribe({
                        next: (passengers) => {
                            this.passengers = passengers
                        },
                        error: (error) => {
                            console.error('Erreur lors de la récupération des passagers :', error);
                        }
                    });
            }
        }
    }

    isNotNull() {
        return !!this.flight && Object.keys(this.flight).length > 0;
    }


}