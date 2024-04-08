import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaService } from "src/db/prisma.service";
import { CreateUserDTO } from "./dto/CreateUser.dto";
import { UpdateUserDTO } from "./dto/UpdateUser.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}
  
  async onModuleInit() {
    await this.createAdminUser();
  }

  private async createAdminUser() {
    const adminExists = await this.prisma.user.findUnique({
      where: {
        email: 'admin@profera.com'
      }
    })
    if (!adminExists && process.env.DEPLOY === 'prod') {
      const hashedPassword = await bcrypt.hash('admin', 10);
      await this.prisma.user.create({
        data: {
          name: 'admin',
          email: 'admin@profera.com',
          password: hashedPassword,
        }
      });
    }
  }

  async create({ name, email, password }: CreateUserDTO) {
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      }
    });
    return user;
  }

  async update(id: string, newDataUser: UpdateUserDTO) {
    const user = await this.prisma.user.update({
      where: {
        id
      },
      data: newDataUser
    });
    return user;
    
  }

  async delete(id: string) {
    const user = await this.prisma.user.delete({
      where: {
        id
      }
    });
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    });
  
    if (!user) {
      return null;
    }
  
    return {
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }
  

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    });
    return user;
  }
}