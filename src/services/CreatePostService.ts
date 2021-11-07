import prismaClient from '../prisma';

class CreatePostService {
  async execute(content: string, userUsername: string) {
    const message = await prismaClient.post.create({
      data: {
        content,
        userUsername
      }
    });

    return message;
  }
}

export default new CreatePostService();
