import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString({ message: 'O nome deve ser um texto' })
  @IsNotEmpty({ message: 'É necessário informar o nome.' })
  name: string;

  @ApiProperty()
  @IsEmail({}, { message: 'É necessário informar um e-mail válido' })
  @IsNotEmpty({ message: 'É necessário informar o e-mail.' })
  email: string;

  @ApiProperty()
  @IsString({ message: 'A senha deve ser um texto' })
  @MinLength(8, { message: 'A senha deve possuir ao menos 8 characteres' })
  @IsNotEmpty({ message: 'É necessário informar a senha.' })
  password: string;
}
