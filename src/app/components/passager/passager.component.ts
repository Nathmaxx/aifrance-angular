import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import { MatIcon } from '@angular/material/icon';
import { ClassColorDirective } from '../../directives/class-color.directive';

@Component({
    selector: 'app-passager',
    imports: [MatIcon, ClassColorDirective],
    templateUrl: './passager.component.html',
})
export class PassagerComponent {

    @Input() passenger!: Passager
}
