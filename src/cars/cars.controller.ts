import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    console.log({ id });

    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() request: CreateCarDto) {
    return request;
  }

  @Patch(':id')
  updateCar(
    @Body() body,
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id: id,
    };
  }
}
