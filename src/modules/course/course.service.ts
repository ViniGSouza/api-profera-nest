import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db/prisma.service";
import { CreateCourseDTO } from "./dto/CreateCourse.dto";
import { UpdateCourseDTO } from "./dto/UpdateCourse.dto";

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}
  
  async findAll() {
    return await this.prisma.course.findMany();
  }

  async findById(id: string) {
    const course = await this.prisma.course.findUnique({
      where: {
        id
      }
    });
    return course;
  }

  async create({ name, description, urlImg }: CreateCourseDTO) {
    const user = await this.prisma.course.create({
      data: {
        name,
        description,
        urlImg
      }
    });
    return user;
  }

  async delete(id: string) {
    const course = await this.prisma.course.delete({
      where: {
        id
      }
    });
    return course;
  }

  async update(id: string, newDataCourse: UpdateCourseDTO) {
    const course = await this.prisma.course.update({
      where: {
        id
      },
      data: newDataCourse
    });
    return course;
  }
}