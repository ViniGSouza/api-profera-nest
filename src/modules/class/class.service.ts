import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db/prisma.service";
import { CreateClassDTO } from "./dto/CreateClass.dto";
import { UpdateClassDTO } from "./dto/UpdateClass.dto";

@Injectable()
export class ClassService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.class.findMany();
  }

  async findById(id: string) {
    const classItem = await this.prisma.class.findUnique({
      where: {
        id
      }
    });
    return classItem;
  }

  async create({ name, description, videoUrls, dataDeLancamento, cursoId }: CreateClassDTO) {
    const dataDeLancamentoDate = new Date(dataDeLancamento);
    const classItem = await this.prisma.class.create({
      data: {
        name,
        description,
        videoUrls,
        dataDeLancamento: dataDeLancamentoDate,
        cursoId
      }
    });
    return classItem;
  }

  async delete(id: string) {
    const classItem = await this.prisma.class.delete({
      where: {
        id
      }
    });
    return classItem;
  }

  async update(id: string, newDataClass: UpdateClassDTO) {
    const classItem = await this.prisma.class.update({
      where: {
        id
      },
      data: newDataClass
    });
    return classItem;
  }
}