import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsNotEmpty, ValidateNested } from "class-validator";
import { VideoItemDTO } from "./VideoItem.dto";
import { Type } from "class-transformer";

export class CreateClassDTO {
  @ApiProperty({ example: 'Profera',  description: 'Nome do curso' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @ApiProperty({ example: 'Profera',  description: 'Descricão do curso' })
  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  description: string;

  @ApiProperty({
    type: [VideoItemDTO],
    description: 'Lista de vídeos, cada um com título e URL.',
    example: [{ title: 'Introdução ao Curso', url: 'https://www.youtube.com/watch?v=3' }]
  })
  @IsArray({ message: 'videoUrls deve ser um array' })
  @ValidateNested({ each: true })
  @Type(() => VideoItemDTO)
  videos: VideoItemDTO[];
  
  @ApiProperty({ example: '2024-01-01',  description: 'Data de lançamento do curso' })
  @IsDateString({}, { message: 'A data de lançamento deve estar em formato de data válida' })
  dataDeLancamento: string;

  @ApiProperty({ example: '1',  description: 'ID do curso para o qual a aula será criado' })
  @IsNotEmpty({ message: 'O ID do curso não pode ser vazio' })
  cursoId: string;
}
