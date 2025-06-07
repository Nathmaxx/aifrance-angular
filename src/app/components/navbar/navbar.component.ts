import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'app-navbar',
	imports: [],
	templateUrl: './navbar.component.html',
})
export class NavbarComponent {

	constructor(private _router: Router) { }

	toDecollages(): void {
		this._router.navigateByUrl(`/decollages`);
	}

	toAtterrissages(): void {
		this._router.navigateByUrl('/atterrissages')
	}

}
