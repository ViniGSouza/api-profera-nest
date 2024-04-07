import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({ example: 'Profera', description: 'Nome do usuário'})
  @IsNotEmpty({message: 'O nome não pode ser vazio'})
  name: string;

  @ApiProperty({ example: 'email@profera.com', description: 'Email do usuário'})
  @IsEmail({},{message: 'Email inválido'})
  @IsNotEmpty({message: 'O email não pode ser vazio'})
  email: string;

  @ApiProperty({ example: '123456', description: 'Senha do usuário'})
  @MinLength(6, {message: 'A senha deve ter pelo menos 6 caracteres'})
  password: string;
}