import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Vol } from '../../models/vol.model';
import { VolComponent } from "../vol/vol.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-liste-passagers',
    imports: [VolComponent, CommonModule],
    templateUrl: './liste-passagers.component.html',
})
export class ListePassagersComponent implements OnChanges {

    @Input() flight!: Vol
    flightIsValid: boolean = false;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['flight']) {
            this.flightIsValid = this.isNotNull();
            console.log('Flight changed, isValid:', this.flightIsValid);
        }
    }

    isNotNull() {
        return !!this.flight && Object.keys(this.flight).length > 0;
    }
}