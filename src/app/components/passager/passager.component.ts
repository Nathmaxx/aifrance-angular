import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-passager',
    imports: [MatIcon],
    templateUrl: './passager.component.html',
})
export class PassagerComponent {

    @Input() passenger!: Passager
}
