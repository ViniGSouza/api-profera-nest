import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class VideoItem {
  @ApiProperty({ example: 'Introdução ao Curso', description: 'Título do vídeo' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'https://www.youtube.com/watch?v=3', description: 'URL do vídeo' })
  @IsNotEmpty()
  url: string;
}
