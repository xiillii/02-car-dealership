import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  { id: uuid(), name: 'Alfa Romeo', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Audi', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Bmw', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Chevrolet', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Chrystler', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Dodge', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Ferrari', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Fiat', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Ford', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Honda', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Hyundai', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Jaguar', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Jeep', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Kia', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Mazda', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Mercedez-Benz', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Mitsubish', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Nissan', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Peugeot', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Porsche', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Subaru', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Suzuki', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Toyota', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Volkswagen', createdAt: new Date().getTime() },
];
