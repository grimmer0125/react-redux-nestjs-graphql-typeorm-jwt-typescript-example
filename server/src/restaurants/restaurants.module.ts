import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsResolver } from './restaurants.resolver';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './models/restaurant.model';
import { OpenTime } from './models/opentime.model';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, OpenTime])],
  providers: [RestaurantsService, RestaurantsResolver], // RestaurantsService
})
export class RestaurantsModule {}
