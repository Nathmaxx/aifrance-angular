import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[appLuggages]',
	standalone: true
})
export class LuggagesDirective implements OnInit {

	@Input('appLuggages') numberOfLuggages!: number;
	@Input() flightClass!: string;

	constructor(private el: ElementRef) { }

	ngOnInit() {
		this.applyStyle();
	}

	private applyStyle() {
		let isValid = true
		if (this.flightClass.toLowerCase() === "standard" && this.numberOfLuggages > 1) {
			isValid = false
		} else if (this.flightClass.toLowerCase() === "business" && this.numberOfLuggages > 2) {
			isValid = false
		} else if (this.flightClass.toLowerCase() === "standard" && this.numberOfLuggages > 3) {
			isValid = false
		}

		if (!isValid) {
			this.el.nativeElement.style.backgroundColor = "red"
		}
	}

} 
