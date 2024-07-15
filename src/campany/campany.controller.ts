import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Put,
} from '@nestjs/common';
import { orga } from './campany.entity';
import { campanyService } from './campany.service';
import { campanydata } from './campnaydatadto/campanydata.dto';

@Controller()
export class campanyController {
  constructor(private readonly campnayService: campanyService) {}
  @Post('create')
  createStuff(@Body() stuffDto: campanydata): Promise<orga> {
    return this.campnayService.createStuff(stuffDto);
  }
  // route for getting all stuff
  @Get('getall')
  getStuff(): Promise<orga[]> {
    return this.campnayService.getStuff();
  }

  // route for get stuffs in hierarchy
  @Get('getbyorder')
  getByorder(): Promise<orga | orga[]> {
    return this.campnayService.getByOrder();
  }

  // route for getting single stuff
  @Get(':id')
  getoneStuff(@Param('id') id: number): Promise<orga> {
    return this.campnayService.getoneStuff(+id);
  }

  // ROUTE TO update
  @Put(':id')
  updateStuff(
    @Param('id') id: number,
    @Body() stuffDto: campanydata,
  ): Promise<orga> {
    return this.campnayService.updateStuff(id, stuffDto);
  }

  // route for delete
  @Delete(':id')
  async removestuff(@Param('id') id: number): Promise<void> {
    await this.campnayService.removestuff(id);
  }
}
