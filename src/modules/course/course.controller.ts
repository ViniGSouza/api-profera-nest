import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDTO } from './dto/CreateCourse.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { UpdateCourseDTO } from './dto/UpdateCourse.dto';
import { UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Cursos')
@ApiBearerAuth()
@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async findAll() {
    try {
      return await this.courseService.findAll();
    } catch (error) {
      return 'Erro ao buscar os dados dos cursos.';
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      return await this.courseService.findById(id);
    } catch (error) {
      return 'Erro ao buscar os dados do curso.';
    }
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createCourseDTO: CreateCourseDTO) {
    try {
      return await this.courseService.create(createCourseDTO);
    } catch (error) {
      return 'Erro ao criar o curso.';
    }
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateCourseDTO: UpdateCourseDTO) {
    try {
      return await this.courseService.update(id, updateCourseDTO);
    } catch (error) {
      return 'Erro ao atualizar o curso.';
    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    try {
      return await this.courseService.delete(id);
    } catch (error) {
      return 'Erro ao deletar o curso.';
    }
  }
}
