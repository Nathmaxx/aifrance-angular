import { IAeroport } from './aeroport.model';

export interface IFilters {
  airport: IAeroport;
  startDate: Date;
  endDate: Date;
}
