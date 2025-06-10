import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vol } from '../../models/vol.model';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-vol',
    imports: [MatIcon, CommonModule],
    templateUrl: './vol.component.html',
})
export class VolComponent {
    @Input() flight!: Vol
    @Input() searchType!: string

    @Output() emitter = new EventEmitter<Vol>();

    selectFlight() {
        this.emitter.emit(this.flight)
    }
}
