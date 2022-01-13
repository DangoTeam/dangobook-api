import { IUser } from '../@types/interfaces/UserInterface';
import prismaClient from '../prisma';

class UserRepository {
  findAll() {
    return prismaClient.user.findMany();
  }

  findByUsername(username: string) {
    return prismaClient.user.findUnique({
      where: {
        username
      }
    });
  }

  findById(id: string) {
    return prismaClient.user.findUnique({
      where: {
        id
      }
    });
  }

  create(data: IUser) {
    return prismaClient.user.create({
      data
    });
  }

  delete(id: string) {
    return prismaClient.user.delete({
      where: {
        id
      }
    });
  }

  update(id: string, data: IUser) {
    return prismaClient.user.update({
      where: {
        id
      },
      data
    });
  }
}

export default new UserRepository();
