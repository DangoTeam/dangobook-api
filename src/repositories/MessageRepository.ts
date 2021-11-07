import prismaClient from '../prisma';

export interface IPost {
  id: string;
  author: {
    username: string;
    name: string;
  }
  content: string;
  createdAt: string;
}

class PostRepository {
  findAll(id) {
    return prismaClient.post.findMany({
      where: {
        id
      }
    });
  }

  create(data: IPost) {
    return prismaClient.post.create({
      data
    });
  }

  delete(id: string) {
    return prismaClient.post.delete({
      where: {
        id
      }
    });
  }

  update(id: string, content: string) {
    return prismaClient.post.update({
      where: {
        id
      },
      data: {
        content
      }
    });
  }
}

export default new PostRepository();
