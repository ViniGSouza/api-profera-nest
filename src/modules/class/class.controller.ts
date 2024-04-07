import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/auth.guard";
import { ClassService } from "./class.service";
import { CreateClassDTO } from "./dto/CreateClass.dto";
import { UpdateClassDTO } from "./dto/UpdateClass.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('Aulas')
@ApiBearerAuth()
@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  async findAll() {
    try {
      return await this.classService.findAll();
    } catch (error) {
      return 'Erro ao buscar os dados das aulas.'
    }
  }
  
  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      return await this.classService.findById(id);
    } catch (error) {
      return 'Erro ao buscar os dados da aula.'
    }
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() data: CreateClassDTO) {
    try {
      return await this.classService.create(data);
    } catch (error) {
      console.log(error)
      return 'Erro ao criar a aula.'
    }
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() dataUpdate: UpdateClassDTO) {
    try {
      return await this.classService.update(id, dataUpdate);
    } catch (error) {
      console.log(error)
      return 'Erro ao atualizar a aula.'
    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    try {
      return await this.classService.delete(id);
    } catch (error) {
      return 'Erro ao deletar a aula.'
    }
  }
}