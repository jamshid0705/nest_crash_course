import { Module,NestModule,MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users.schema';
import { ExampleMiddleware } from 'src/middlewares/example/example.middleware';
import { AnotherMiddleware } from 'src/middlewares/another/another.middleware';

@Module({
  imports: [MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})

export class UsersModule implements NestModule{
  configure(consumer:MiddlewareConsumer){
    consumer.apply(ExampleMiddleware).forRoutes({
      path:"users",
      method:RequestMethod.GET
    },
    {
      path:"users/:id",
      method:RequestMethod.GET
    }).apply(AnotherMiddleware).forRoutes({
      path:'users',
      method:RequestMethod.POST
    })
  }
}
