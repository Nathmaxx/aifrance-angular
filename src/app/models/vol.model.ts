import { COMPAGNIES } from './../constants/compagnie.constant';
import { IPassager } from './passager.model';

/**
 * OpenSky REST API Flight DTO
 * https://openskynetwork.github.io/opensky-api/rest.html#
*/
export interface IVolDto {
	icao24: string;
	firstSeen: number;
	estDepartureAirport: string;
	lastSeen: number;
	estArrivalAirport: string;
	callsign: string;
	estDepartureAirportHorizDistance: number;
	estDepartureAirportVertDistance: number;
	estArrivalAirportHorizDistance: number;
	estArrivalAirportVertDistance: number;
	departureAirportCandidatesCount: number;
	arrivalAirportCandidatesCount: number;
}


export interface IVol {
	icao: string;
	matricule: string;
	compagnie: string;
	aeroportDepart: string;
	aeroportArrivee: string;
}

export class Vol implements IVol {
	icao: string;
	matricule: string;
	compagnie: string;
	aeroportDepart: string;
	aeroportArrivee: string;
	companyImageLink: string;
	passagers: IPassager[];

	constructor(dto: IVolDto) {
		this.icao = dto.icao24;
		this.matricule = dto.callsign;
		this.compagnie = this.getCompagnie(dto.callsign);
		this.companyImageLink = this.getCompanyLink(this.compagnie)
		this.aeroportDepart = dto.estDepartureAirport;
		this.aeroportArrivee = dto.estArrivalAirport;
		this.passagers = [];
	}

	getCompagnie(matricule: string): string {
		let compagnie: string = '';
		Object.entries(COMPAGNIES).forEach(([key$, value$]) => {
			if (matricule.includes(key$)) {
				compagnie = value$;
			}
		});

		return compagnie;
	}

	getCompanyLink(compagnie: string): string {
		if (compagnie === "Air France") {
			return 'assets/Air-France.png'
		} else if (compagnie === "Air France Hop") {
			return 'assets/Air-France-Hop.png'
		} else if (compagnie === "Transavia France") {
			return 'assets/Transavia-France.png'
		} else {
			return ''
		}
	}
}
