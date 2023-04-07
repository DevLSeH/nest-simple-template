import { CustomException } from 'src/global/error/custom-exception.error';
import { POST_NOT_FOUND } from 'src/global/error/res-code.error';

class PostNotFoundException extends CustomException{
  constructor() {
    super(POST_NOT_FOUND);
  }
}

export { PostNotFoundException};