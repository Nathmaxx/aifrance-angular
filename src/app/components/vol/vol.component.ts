import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Vol } from '../../models/vol.model';

@Component({
    selector: 'app-vol',
    imports: [MatIcon],
    templateUrl: './vol.component.html',
})
export class VolComponent {
    @Input() flight!: Vol

    // companyImage: string = this.flight.getCompanyLink(this.flight.compagnie)
}
