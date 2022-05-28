import { IPost } from '../../@types/interfaces/PostInterface';
import PostRepository from '../../repositories/PostRepository';

class CreatePostService {
  async execute(data: IPost) {
    const newPost = await PostRepository.create({
      ...data,
    });

    return newPost;
  }
}

export default new CreatePostService();
