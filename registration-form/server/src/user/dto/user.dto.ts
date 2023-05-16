// user registration input validations.

import { IsNotEmpty, IsEmail, IsPhoneNumber, IsBoolean } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone:string;

  @IsBoolean()
  isVisible : boolean;

}
