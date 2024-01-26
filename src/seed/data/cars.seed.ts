import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  { id: uuid(), brand: 'Alfa Romeo', model: '164' },
  { id: uuid(), brand: 'Audi', model: 'Q3' },
  { id: uuid(), brand: 'Bmw', model: '128i' },
  { id: uuid(), brand: 'Chevrolet', model: 'Astro' },
  { id: uuid(), brand: 'Chrystler', model: 'Aspen' },
  { id: uuid(), brand: 'Dodge', model: 'Spirit' },
  { id: uuid(), brand: 'Ferrari', model: '512TR' },
  { id: uuid(), brand: 'Fiat', model: '2000 Spider' },
  { id: uuid(), brand: 'Ford', model: 'Fiesta' },
  { id: uuid(), brand: 'Honda', model: 'Civic' },
  { id: uuid(), brand: 'Hyundai', model: 'Elantra' },
  { id: uuid(), brand: 'Jaguar', model: 'XF' },
  { id: uuid(), brand: 'Jeep', model: 'Cherokee' },
  { id: uuid(), brand: 'Kia', model: 'Forte' },
  { id: uuid(), brand: 'Mazda', model: 'MAZDA2' },
  { id: uuid(), brand: 'Mercedez-Benz', model: '240D' },
  { id: uuid(), brand: 'Mitsubish', model: 'Cordia' },
  { id: uuid(), brand: 'Nissan', model: 'Sentra' },
  { id: uuid(), brand: 'Peugeot', model: '504' },
  { id: uuid(), brand: 'Porsche', model: 'Cayenne' },
  { id: uuid(), brand: 'Subaru', model: 'Forester' },
  { id: uuid(), brand: 'Suzuki', model: 'Equator' },
  { id: uuid(), brand: 'Toyota', model: 'Corolla' },
  { id: uuid(), brand: 'Volkswagen', model: 'Jetta' },
];
