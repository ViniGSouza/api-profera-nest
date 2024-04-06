import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsJSON, IsNotEmpty } from "class-validator";

export class CreateClassDTO {
  @ApiProperty({ example: 'Profera',  description: 'Nome do curso' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @ApiProperty({ example: 'Profera',  description: 'Descricão do curso' })
  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  description: string;

  @ApiProperty({
    example: '["https://www.youtube.com/watch?v=1", "https://www.youtube.com/watch?v=2"]',
    description: 'Lista de URLs de vídeo em formato JSON.'
  })
  @IsJSON({ message: 'Os URLs de vídeo devem estar em formato JSON válido' })
  videoUrls: string;
  
  @ApiProperty({ example: '2024-01-01',  description: 'Data de lançamento do curso' })
  @IsDateString({}, { message: 'A data de lançamento deve estar em formato de data válida' })
  dataDeLancamento: Date;

  @ApiProperty({ example: '1',  description: 'ID do curso para o qual a aula será criado' })
  @IsNotEmpty({ message: 'O ID do curso não pode ser vazio' })
  cursoId: string;
}
