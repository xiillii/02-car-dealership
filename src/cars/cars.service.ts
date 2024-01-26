import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dtos/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id == id);

    if (!car) {
      throw new NotFoundException(`Car with Id '${id}' not found`);
    }
    return car;
  }

  create(requestDto: CreateCarDto): Car {
    // convert DTO to car interface

    // let car: Car;

    // The following instructions not work. Why?
    // car.brand = requestDto.brand;
    // car.model = requestDto.model;
    // car.id = uuid();

    // const car: Car = {
    //   id: uuid(),
    //   brand: requestDto.brand,
    //   model: requestDto.model,
    // };

    const car: Car = {
      id: uuid(),
      ...requestDto,
    };

    this.cars.push(car);
    console.log({ cars: this.cars });

    return car;
  }
}
