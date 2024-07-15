import { Module } from '@nestjs/common';
import { campanyController } from './campany.controller';
import { campanyService } from './campany.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { orga } from './campany.entity';

@Module({
  imports: [TypeOrmModule.forFeature([orga])],
  controllers: [campanyController],
  providers: [campanyService],
})
export class campanyModule {}
