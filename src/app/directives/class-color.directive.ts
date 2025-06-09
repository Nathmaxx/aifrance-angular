import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[appClassColor]',
	standalone: true
})
export class ClassColorDirective implements OnInit {

	@Input('appClassColor') flightClass!: string

	constructor(private el: ElementRef) { }

	ngOnInit() {
		this.applyColor();
	}

	applyColor() {
		const value = this.flightClass.toLowerCase()
		let color = "black"

		switch (value) {
			case "standard":
				color = "red"
				break;

			case "business":
				color = "orange"
				break;

			case "premium":
				color = "violet"
				break;
		}
		this.el.nativeElement.style.color = color
	}

}
