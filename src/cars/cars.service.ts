import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos';

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

  update(id: string, requestDto: UpdateCarDto): Car {
    let carDb = this.findOneById(id);

    if (requestDto.id && requestDto.id !== id) {
      throw new BadRequestException('Car id is not valid inside body');
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = { ...carDb, ...requestDto, id };
        return carDb;
      }

      return car;
    });

    return carDb;
  }

  delete(id: string) {
    this.findOneById(id);

    // remove car
    // const lastIndex = this.cars.lastIndexOf(carDb);
    // this.cars.splice(lastIndex, 1);

    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
