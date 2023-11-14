import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://jamshidshamshod0705:07052000@cluster0.whszxkx.mongodb.net/nestjs_tutorial?retryWrites=true&w=majority'),UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
