import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    { id: uuid(), name: 'Toyota', createdAt: new Date().getTime() },
    { id: uuid(), name: 'Volvo', createdAt: new Date().getTime() },
    { id: uuid(), name: 'Jeep', createdAt: new Date().getTime() },
    { id: uuid(), name: 'Chevrolet', createdAt: new Date().getTime() },
    { id: uuid(), name: 'Nissan', createdAt: new Date().getTime() },
  ];
  create(createBrandDto: CreateBrandDto): Brand {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,

      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) {
      throw new NotFoundException(`Brand with Id '${id}' not found`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto): Brand {
    let brandDb = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDb = {
          ...brandDb,
          ...updateBrandDto,
          id,
          updatedAt: new Date().getTime(),
        };
        return brandDb;
      }
      return brand;
    });

    return brandDb;
  }

  remove(id: string) {
    this.findOne(id);

    this.brands = this.brands.filter((brand) => brand.id !== id);
  }
}
