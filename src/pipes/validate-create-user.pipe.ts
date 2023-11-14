import { ArgumentMetadata, Injectable, PipeTransform,HttpStatus,HttpException } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value:CreateUserDto , metadata: ArgumentMetadata) {
    console.log('Inside ValidateCreateUserPipe')
    console.log(value)
    console.log(metadata)

    const parseAgeInt=parseInt(value.age.toString())
    if(isNaN(parseAgeInt)){
      throw new HttpException('Invalid data type property age',HttpStatus.BAD_REQUEST)
    }
    console.log(`${parseAgeInt} is number`)
    return {...value,age:parseAgeInt};
  }
}
