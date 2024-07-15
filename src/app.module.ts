import { Module } from '@nestjs/common';
import { orgaController } from './app.controller';
import { orgaService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { campanyModule } from './campany/campany.module';
import { orga } from './campany/campany.entity';

// registering name service and controller service

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0941416856ia',
      database: 'orga_structure',
      entities: [orga],
      synchronize: true,
    }),
    campanyModule,
  ],
})
export class AppModule {}
