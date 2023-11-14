import { IsEmail, IsNotEmpty, IsStrongPassword ,IsLowercase,IsString,MinLength} from "class-validator"

export class CreateUserDto{
    @IsString()
    name:string
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @IsLowercase()
    email:string
    @IsNotEmpty()
    @MinLength(8)
    @IsStrongPassword()
    password:string
}