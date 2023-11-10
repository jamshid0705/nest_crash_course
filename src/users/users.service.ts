import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private fakeUser=[{name:'jamshid',email:"jamshid@gmail.com",password:'jkfhifg67456rtew8f'},
    {name:'xurshid',email:"xurshi@gmail.com",password:'jkfhifg67456rtew8f'},
    {name:'john',email:"john@gmail.com",password:'jkfhifg67456rtew8f'}]

    getAll(){
        return this.fakeUser
    }
}
