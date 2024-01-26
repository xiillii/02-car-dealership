// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';
import { IsString, MinLength } from 'class-validator';

// Comment this line because we need a minimum field
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto {
  @IsString()
  @MinLength(1)
  name: string;
}
