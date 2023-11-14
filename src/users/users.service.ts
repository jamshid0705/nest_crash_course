import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createUserType } from 'src/utils/types';
import { User } from './users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private UserModel:Model<User>){}

    async getAll(){
        return await this.UserModel.find()
    }

    async createUser(user:createUserType){
        const a=await this.UserModel.find({})
        for(let val of a){
            if(user.email===val.email){
              return {message:'Email must unique'}
            }
        }
        return await this.UserModel.create(user)
    }

    async findById(id:string){
        return await this.UserModel.findById(id)
    }
}
