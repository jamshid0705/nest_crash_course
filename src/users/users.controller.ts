import { Body, Controller, Get, Post, Req, Res,Param ,Query,UsePipes,ValidationPipe,ParseIntPipe} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UserService:UsersService){}
    @Get()
    async getAll(){
        return this.UserService.getAll()
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() userData:CreateUserDto){
       return this.UserService.createUser(userData)
    }

    @Get(':id')
    async getOne(@Param('id') id:string){ 
        try {
            return this.UserService.findById(id)
        } catch (error) {
            return {error}
        }
       
    }
}
