import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Vol } from '../../models/vol.model';

@Component({
    selector: 'app-vol',
    imports: [MatIcon],
    templateUrl: './vol.component.html',
})
export class VolComponent {
    @Input() flight!: Vol

    @Output() emitter = new EventEmitter<Vol>();

    selectFlight() {
        this.emitter.emit(this.flight)
    }
}
