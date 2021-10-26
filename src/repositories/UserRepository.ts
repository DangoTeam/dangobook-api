import prismaClient from "../prisma";

interface IUser {
  username: string;
  password: string;
  name: string;
}

class UserRepository {
  findAll() {
    return prismaClient.user.findMany();
  }

  findByUsername(username: string) {
    return prismaClient.user.findFirst({
      where: {
        username
      }
    });
  }

  create(data: IUser) {
    return prismaClient.user.create({
      data
    });
  }

  delete(username: string) {
    return prismaClient.user.delete({
      where: {
        username
      }
    });
  }

  update(username: string, data: IUser) {
    return prismaClient.user.update({
      where: {
        username,
      },
      data
    });
  }
}

export default new UserRepository()