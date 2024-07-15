import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { orga } from './campany.entity';
import { Repository } from 'typeorm';

@Injectable()
export class campanyService {
  constructor(
    @InjectRepository(orga)
    private readonly campanyRepository: Repository<orga>,
  ) {}
  //   create new staff
  async createStuff(dtoData: any): Promise<orga> {
    return await this.campanyRepository.save(dtoData);
  }
  // get all staff
  async getStuff(): Promise<orga[]> {
    return await this.campanyRepository.find();
  }

  // ******************************************************
  // make the hierachy of the organization
  async getByOrder(): Promise<orga | orga[]> {
    const orgaStracture = await this.campanyRepository.find();
    const orgaData = [];
    // inserting the data into the array
    const orgaArray = orgaStracture.map((orga) => ({
      id: orga.id,
      name: orga.name,
      description: orga.description,
      parentId: orga.parentId,
    }));
    return this.campanyRepository.find();
  }

  async getoneStuff(id: number): Promise<orga> {
    // id from the database
    const oneStuff = await this.campanyRepository.findOne({ where: { id } });
    if (oneStuff && oneStuff.id === id) {
      return oneStuff;
    } else {
      console.log(' user not found');
    }
  }

  async updateStuff(id: number, newStaff: Partial<orga>): Promise<orga> {
    const oneStuff = await this.campanyRepository.findOne({ where: { id } });
    Object.assign(oneStuff, newStaff);
    await this.campanyRepository.save(oneStuff);
    return oneStuff;
  }

  async removestuff(id: number): Promise<void> {
    const oneStuff = await this.campanyRepository.findOne({ where: { id } });
    if (oneStuff && id != oneStuff.id) {
      console.log('stuff not found');
    } else {
      await this.campanyRepository.delete(id);
    }
  }
}
