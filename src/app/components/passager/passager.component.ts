import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import { MatIcon } from '@angular/material/icon';
import { ClassColorDirective } from '../../directives/class-color.directive';
import { LuggagesDirective } from '../../directives/luggages.directive';

@Component({
    selector: 'app-passager',
    standalone: true,
    imports: [MatIcon, ClassColorDirective, LuggagesDirective],
    templateUrl: './passager.component.html',
})
export class PassagerComponent {

    @Input() passenger!: Passager
}
