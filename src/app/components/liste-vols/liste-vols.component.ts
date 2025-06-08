import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vol } from '../../models/vol.model';
import { CommonModule } from '@angular/common';
import { VolComponent } from "../vol/vol.component";

@Component({
    selector: 'app-liste-vols',
    imports: [CommonModule, VolComponent],
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
