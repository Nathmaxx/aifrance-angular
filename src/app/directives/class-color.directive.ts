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
		let bgColor = "transparent"


		switch (value) {
			case "standard":
				color = "#c1381b"
				bgColor = "rgba(193, 56, 27, 0.1)"
				break;

			case "business":
				color = "#daa529"
				bgColor = "rgba(218, 165, 41, 0.1)"
				break;

			case "premium":
				color = "#a219d9"
				bgColor = "rgba(162, 25, 217, 0.1)"
				break;
		}

		this.el.nativeElement.style.color = color
		this.el.nativeElement.style.backgroundColor = bgColor
	}

}
