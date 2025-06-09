import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vol } from '../../models/vol.model';
import { CommonModule } from '@angular/common';
import { VolComponent } from "../vol/vol.component";
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-liste-vols',
    imports: [CommonModule, VolComponent, MatIcon],
    templateUrl: './liste-vols.component.html',
})
export class ListeVolsComponent {
    @Input() flights!: Vol[]

    flight!: Vol

    @Output() emitter = new EventEmitter<Vol>();

    forwardFlight(flight: Vol) {
        this.emitter.emit(flight)
    }
}
