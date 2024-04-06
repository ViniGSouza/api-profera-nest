import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCourseDTO {
  @ApiProperty({example: 'Matemática', description: 'Nome do curso'})
  @IsNotEmpty({message: 'O nome não pode ser vazio'})
  name: string;

  @ApiProperty({example: 'Curso de matemática', description: 'Descricão do curso'})
  @IsNotEmpty({message: 'A descrição não pode ser vazia'})
  description: string;

  @ApiProperty({example: 'http://image.com', description: 'Link da imagem'})
  @IsNotEmpty({message: 'O link da imagem não pode ser vazio'})
  urlImg: string;
}