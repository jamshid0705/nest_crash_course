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
        console.log(userData)
        return {userData}
    }

    @Get(':id')
    async getOne(@Param('id',ParseIntPipe) id:string){ // string ni numberga o'giradi
        console.log(id)
        return {id}
    }
}
