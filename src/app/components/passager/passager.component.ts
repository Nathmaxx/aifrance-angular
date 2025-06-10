import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import { MatIcon } from '@angular/material/icon';
import { ClassColorDirective } from '../../directives/class-color.directive';
import { LuggagesDirective } from '../../directives/luggages.directive';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-passager',
    standalone: true,
    imports: [MatIcon, ClassColorDirective, LuggagesDirective, CommonModule, MatTooltipModule],
    templateUrl: './passager.component.html',
})
export class PassagerComponent {

    @Input() passenger!: Passager
    @Input() showProfileImage!: boolean
}
