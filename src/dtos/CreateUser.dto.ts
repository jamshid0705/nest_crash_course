import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator"

export class CreateUserDto{
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    @IsEmail()
    email:string
    @IsStrongPassword()
    password:string
}