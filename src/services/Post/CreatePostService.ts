import { IPost } from '../../@types/interfaces/PostInterface';
import PostRepository from '../../repositories/PostRepository';

class CreatePostServices {
  async execute(data: IPost) {
    return PostRepository.create(data);
  }
}

export default new CreatePostServices();
